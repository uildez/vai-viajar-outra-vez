'use client';

import React from 'react'
import YoutubeTitle from '../components/youtubeTitle';

import { GoArrowUpRight } from "react-icons/go";
import { FaRegCirclePlay } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Youtube() {
  return (
    <div className='flex flex-col gap-12 bg-blue-600 py-12'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center w-full mx-auto gap-8 bg-blue-600'>
        <h2 className='relative text-9xl lg:text-[12rem] text-white font-bold font-akina uppercase -mt-[3.5rem]'>
          3,31
          <YoutubeTitle />
        </h2>
        <div className='relative px-8 lg:px-0'>
          <h2 className='text-4xl lg:text-6xl text-center lg:text-left text-white font-redonda uppercase'>
            <strong>mil </strong><br className='hidden lg:flex' />
            <span className='font-redonda font-semibold'>inscritos</span><br />
            NO youtube
          </h2>
          <a
            href="#"
            className='flex w-fit mt-8 text-lg lg:text-3xl items-center justify-center border-2 border-yellow-600 text-yellow-600 rounded-[20px] uppercase px-8 py-2 hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
            target='_blank'
          >
            Acessar Youtube <GoArrowUpRight className='text-3xl' />
          </a>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
        pagination={{ clickable: true }}
        className='w-full gap-8'
        loop
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide style={{ display: 'flex' }} className="flex cursor-pointer items-center justify-center aspect-video group w-full hover:scale-105 overflow-hidden bg-[url('/webp/video-1.webp')] bg-center bg-cover bg-no-repeat rounded-3xl">
          <FaRegCirclePlay className="z-10 text-gray-200/70 text-8xl group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className="flex cursor-pointer items-center justify-center aspect-video group w-full hover:scale-105 overflow-hidden bg-[url('/webp/video-2.webp')] bg-center bg-cover bg-no-repeat rounded-3xl">
          <FaRegCirclePlay className="z-10 text-gray-200/70 text-8xl group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className="flex cursor-pointer items-center justify-center aspect-video group w-full hover:scale-105 overflow-hidden bg-[url('/webp/video-3.webp')] bg-center bg-cover bg-no-repeat rounded-3xl">
          <FaRegCirclePlay className="z-10 text-gray-200/70 text-8xl group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className="flex cursor-pointer items-center justify-center aspect-video group w-full hover:scale-105 overflow-hidden bg-[url('/webp/video-1.webp')] bg-center bg-cover bg-no-repeat rounded-3xl">
          <FaRegCirclePlay className="z-10 text-gray-200/70 text-8xl group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
