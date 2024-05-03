'use client'

import styles from "./ImageCarousel.module.scss"
import Image from "next/image";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface ImageCarouselProps {
    images: string[];
}
 
export function ImageCarousel({images} : ImageCarouselProps) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt={`Image #${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
