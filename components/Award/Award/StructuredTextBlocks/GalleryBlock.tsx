"use client";
import React, { useState, FC, useMemo } from "react";
import { Image as DatoImage } from "react-datocms";
import { GalleryRecord, ImageFileField } from "@/graphql/generated";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

type Props = {
  galleryRecords: GalleryRecord[];
};

const GalleryBlock: FC<Props> = ({ galleryRecords }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const extractImages = useMemo(() => {
    return galleryRecords?.map((record: GalleryRecord) => record.imageGallery?.map((image: ImageFileField) => image)).flat();
  }, [galleryRecords])

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mainSwiper !m-0"
      >
        {extractImages.map((image: ImageFileField, index: number) => (
          <SwiperSlide key={index}>
            <div
              className="relative aspect-square mx-auto w-full !overflow-hidden  h-full max-h-[220px] sm:max-h-[300px] md:max-h-[400px] xl:max-h-[440px]"
            >
              <DatoImage
                className="rounded"
                layout="fill"
                objectFit="cover"
                data={image.responsiveImage}
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={12}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnailSwiper mt-1.5"
        spaceBetween={4}
      >
        {extractImages.map((image: ImageFileField, index: number) => (
          <SwiperSlide key={index}>
            <div className='h-40 w-20 cursor-pointer'>
              <DatoImage
                layout="fill"
                objectFit="cover"
                objectPosition="50% 20%"
                data={image.responsiveImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GalleryBlock;
