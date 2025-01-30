'use client';

import React from 'react'
import { IoIosLock } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import GuidesUp from '../components/guidesUp';
import GuidesDown from '../components/guideDown';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { motion } from 'motion/react';

const slides = [
  { id: 1, title: 'Las Vegas', background: '/webp/lasvegas.webp' },
  { id: 2, title: 'Orlando', background: '/webp/orlando.webp' },
  { id: 3, title: 'California', background: '/webp/california.webp' },
  { id: 4, title: 'Noronha', background: '/webp/noronha.webp' },
  { id: 5, title: 'Maceió', background: '/webp/maceio.webp' },
  { id: 6, title: 'Las Vegas', background: '/webp/lasvegas.webp' },
  { id: 7, title: 'Orlando', background: '/webp/orlando.webp' },
];

export default function Guides() {
  return (
    <div id='guias' className={`relative flex flex-col gap-12 justify-center items-center h-auto w-full pb-40 lg:pb-8 pt-20`}>
      <h2 className='relative flex w-fit lg:mx-auto text-4xl lg:text-6xl text-blue-600 bg-yellow-600 px-8 py-4 font-akina uppercase z-10'>
        <GuidesDown />
        Guias de <br />Viagens
        <GuidesUp />
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        centeredSlides={true}
        className="w-full h-[400px] 2xl:h-[500px] gap-4 z-10 py-12"
        loop
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          900:  {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className='hover:-translate-y-4 transition-transform duration-500 ease-in-out'>
            <motion.div
              style={{
                backgroundImage: `url(${slide.background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                borderRadius: '3rem',
                overflow: 'hidden'
              }}
              className="flex flex-col relative items-center justify-between h-[400px] 2xl:h-[500px] w-full group pt-8 pb-12 overflow-hidden cursor-pointer shadow-2xl rounded-[50px] transition-transform duration-500 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, 
              }}
            >
              <div className="flex relative items-center justify-end px-8 w-full z-10">
                <IoIosLock className="text-base right-0 w-[50px] h-[50px] p-4 rounded-xl bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
              </div>
              <h2 className="font-akina text-center text-xl lg:text-3xl uppercase font-bold mx-auto z-10 group-hover:rotate-2 transition-transform duration-500 ease-in-out">
                {slide.title}
              </h2>
              <div className="absolute w-full h-2/4 bottom-0 z-0 bg-gradient-to-t rounded-[3rem] from-black/80 to-transparent" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute top-0 bg-blue-600 h-[60%] w-full -z-0' />
    </div>
  )
}
