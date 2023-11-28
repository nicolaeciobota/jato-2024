"use client";
import React, { useState } from "react";
import { Image as DatoImage } from "react-datocms";
import { GalleryRecord, ImageFileField } from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";

type Props = {
  galleryRecord: GalleryRecord[];
};

const GalleryBlock = ({ galleryRecord }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryRecord.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryRecord.length - 1 : prevIndex - 1
    );
  };

  const currentGalleryItem = galleryRecord[currentIndex];

  return (
    <div className="relative mb-16 mt-16 overflow-hidden rounded-md shadow-md sm:h-[300px] md:h-[400px]">
      {currentGalleryItem.imageGallery?.map(
        (image: ImageFileField, index: number) => (
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
        )
      )}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default GalleryBlock;
