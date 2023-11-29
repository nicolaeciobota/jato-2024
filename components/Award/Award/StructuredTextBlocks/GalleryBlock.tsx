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
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
    };
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      opacity: 0,
      x: direction < 0 ? 1000 : -1000,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const GalleryBlock: React.FC<Props> = ({ galleryRecords }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const paginate = (newDirection: number) => {
    const nextPage =
      (page + newDirection + galleryRecords.length) % galleryRecords.length;
    setPage([nextPage, newDirection]);
    setActiveThumbnail(nextPage);
  };

  const handleThumbnailClick = (index: number) => {
    setPage([index, index - page]);
    setActiveThumbnail(index);
  };

  const thumbnails = galleryRecords.map(
    (record: GalleryRecord, index: number) => (
      <div
        key={index}
        className={`thumbnail ${index === activeThumbnail ? "active" : ""}`}
        onClick={() => handleThumbnailClick(index)}
      >
        <DatoImage
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 20%"
          data={record.imageGallery[0]?.responsiveImage} // Use the first image for thumbnails
        />
      </div>
    )
  );

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
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
          className="relative h-72 w-full overflow-hidden rounded-xl lg:mx-6 lg:h-96 lg:w-1/2"
        >
          <DatoImage
            layout="fill"
            objectFit="cover"
            objectPosition="50% 20%"
            data={galleryRecords[page]?.imageGallery[0]?.responsiveImage}
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
      </AnimatePresence>
      <div className="thumbnails-container mt-3 flex space-x-2">
        {thumbnails}
      </div>
    </div>
  );
};

export default GalleryBlock;
