"use client";
import React, { useState } from "react";
import { Image as DatoImage } from "react-datocms";
import { GalleryRecord, ImageFileField } from "@/graphql/generated";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

type Props = {
  galleryRecords: GalleryRecord[];
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

// ... (imports remain the same)

// ... (imports remain the same)

const GalleryBlock: React.FC<Props> = ({ galleryRecords }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  let images = galleryRecords
    .map((record: GalleryRecord, index: number) => {
      return record.imageGallery?.map(
        (image: ImageFileField, imageIndex: number) => (
          <motion.div
            key={`${index}-${imageIndex}`}
            className="relative h-72 w-full overflow-hidden rounded-xl lg:mx-6 lg:h-96 lg:w-1/2"
            layout
            initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 1000 : -1000 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <DatoImage
              layout="fill"
              objectFit="cover"
              objectPosition="50% 20%"
              data={image.responsiveImage}
            />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-between">
              <div
                className="prev cursor-pointer pl-2 text-white"
                onClick={() => paginate(-1)}
              >
                {"‣"}
              </div>
              <div
                className="next cursor-pointer pr-2 text-white"
                onClick={() => paginate(1)}
              >
                {"‣"}
              </div>
            </div>
          </motion.div>
        )
      );
    })
    .flat(); // Flatten the array to remove nested arrays

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        {images[imageIndex]}
      </AnimatePresence>
    </>
  );
};

export default GalleryBlock;
