'use client';

import React from 'react'
import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from "motion/react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import InstagramTitle from '../components/instagramTitle';

export const SocialMedia = () => {
  const scrollRef = useRef(null);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 48

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    })

    return controls.stop;
  }, [xTranslation, width])

  return (
    <div className='relative my-20'>
      <div className='flex items-center justify-center w-full gap-12 mx-auto'>
        <h2 className='text-[12rem] leading-[0.9] text-blue-600 font-bold font-akina uppercase'>
          101k
        </h2>
        <div className='relative'>
          <h2 className='text-6xl text-blue-600 font-redonda uppercase'>
            <strong>de <br />seguidores</strong><br />
            NO INSTAGRAM
          </h2>
          <InstagramTitle />
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3.2}
        pagination={{ clickable: true }}
        centeredSlides={true}
        className='w-full h-[40vh] gap-8 z-10 mt-8'
        loop
      >
        <SwiperSlide className={`flex flex-col items-center justify-between w-full h-[40vh] pt-8 pb-12 overflow-hidden bg-[url('/webp/instagram-1.webp')] bg-center bg-cover bg-no-repeat rounded-3xl`} />
        <SwiperSlide className={`flex flex-col items-center justify-between w-full h-[40vh] pt-8 pb-12 overflow-hidden bg-[url('/webp/instagram-2.webp')] bg-center bg-cover bg-no-repeat rounded-3xl`} />
        <SwiperSlide className={`flex flex-col items-center justify-between w-full h-[40vh] pt-8 pb-12 overflow-hidden bg-[url('/webp/instagram-3.webp')] bg-center bg-cover bg-no-repeat rounded-3xl`} />
        <SwiperSlide className={`flex flex-col items-center justify-between w-full h-[40vh] pt-8 pb-12 overflow-hidden bg-[url('/webp/instagram-1.webp')] bg-center bg-cover bg-no-repeat rounded-3xl`} />
        <SwiperSlide className={`flex flex-col items-center justify-between w-full h-[40vh] pt-8 pb-12 overflow-hidden bg-[url('/webp/instagram-2.webp')] bg-center bg-cover bg-no-repeat rounded-3xl`} />
        <SwiperSlide className={`flex flex-col items-center justify-between w-full h-[40vh] pt-8 pb-12 overflow-hidden bg-[url('/webp/instagram-3.webp')] bg-center bg-cover bg-no-repeat rounded-3xl`} />
      </Swiper>
      <main className='absolute w-full -bottom-14 py-12 lg:py-20 clients-carrousel z-0'>
        <motion.div className='absolute left-0 flex gap-0' ref={ref} style={{ x: xTranslation }}>
          <h1 className='text-7xl text-blue-600/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
          <h1 className='text-7xl text-blue-600/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
          <h1 className='text-7xl text-blue-600/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
          <h1 className='text-7xl text-blue-600/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
        </motion.div>
      </main>
    </div>
  )
}
