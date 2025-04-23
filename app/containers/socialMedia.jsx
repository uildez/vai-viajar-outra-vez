'use client';

import React from 'react'
import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from "motion/react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import InstagramTitle from '../components/instagramTitle';

import 'swiper/css/autoplay';



export default function SocialMedia() {
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
      <div className='flex flex-col lg:flex-row items-center justify-center w-full gap-4 lg:gap-12 mx-auto'>
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3, duration: 1 }}
          className='text-9xl lg:text-[12rem] leading-[0.9] -mt-24 text-blue-600 font-bold font-akina uppercase'
        >
          105k
        </motion.h2>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3, duration: 1 }}
          className='relative text-center lg:text-left'
        >
          <h2 className='text-4xl lg:text-6xl text-blue-600 font-redonda uppercase'>
            <strong>de <br className='hidden lg:flex' />seguidores</strong><br />
            NO INSTAGRAM
          </h2>
          <InstagramTitle />
        </motion.div>
      </div>
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          900: {
            slidesPerView: 3.2,
            spaceBetween: 50
          }
        }}
        centeredSlides={true}
        className='w-full h-[40vh] gap-8 z-10 mt-8'
        loop
        autoplay={{
          delay: 2000,
        }}
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
