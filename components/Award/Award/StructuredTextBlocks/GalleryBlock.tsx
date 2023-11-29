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

const GalleryBlock: React.FC<Props> = ({ galleryRecords }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  let images = galleryRecords.map((record: GalleryRecord, index: number) => {
    if (record.imageGallery) {
      const image = record.imageGallery[0]; // Assuming you want the first image, adjust as needed
      return (
        <div
          key={index}
          className="relative h-72 w-full overflow-hidden rounded-xl object-cover lg:mx-6 lg:h-96 lg:w-1/2"
        >
          <DatoImage
            layout="fill"
            objectFit="cover"
            objectPosition="50% 20%"
            data={image.responsiveImage}
          />
        </div>
      );
    }
    return null;
  });

  const imageIndex = wrap(0, galleryRecords.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={(images[imageIndex] as any)?.props.children.props.data.src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
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
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};

export default GalleryBlock;
