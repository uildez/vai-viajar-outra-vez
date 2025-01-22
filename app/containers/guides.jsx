'use client';

import React from 'react'
import { IoIosLock } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GuidesUp from '../components/guidesUp';
import GuidesDown from '../components/guideDown';

export default function Guides() {
  return (
    <div id='guias' className={`relative flex flex-col gap-12 justify-center items-center h-[80vh] w-full pb-12 pt-20`}>
      <h2 className='relative w-fit mx-auto text-6xl text-blue-600 bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out px-8 py-4 font-akina uppercase z-10'>
        <GuidesDown />
        Guias de Viagens
        <GuidesUp />
      </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation={true}
        pagination={true}
        centeredSlides={true}
        className='w-full h-[500px] gap-4 z-10 py-12'
        loop
      >
        <SwiperSlide style={{ display: 'flex' }} className={`flex flex-col items-center justify-between w-full group pt-8 pb-12 overflow-hidden bg-[url('/webp/lasvegas.webp')] bg-center bg-cover bg-no-repeat cursor-pointer shadow-2xl rounded-[50px]`}>
          <div className='flex relative items-center justify-end px-8 w-full z-10'>
            <IoIosLock className='text-base right-0 w-[50px] h-[50px] p-4 rounded-xl bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
          <h2 className='font-akina text-center text-3xl uppercase font-bold mx-auto z-10'>Las Vegas</h2>
          <div className='absolute w-full h-2/4 bottom-0 z-0 bg-gradient-to-t from-black/80 to-transparent' />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className={`flex flex-col items-center justify-between w-full group pt-8 pb-12 overflow-hidden bg-[url('/webp/orlando.webp')] bg-center bg-cover bg-no-repeat cursor-pointer shadow-2xl rounded-[50px]`}>
          <div className='flex relative items-center justify-end px-8 w-full z-10'>
            <IoIosLock className='text-base right-0 w-[50px] h-[50px] p-4 rounded-xl bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
          <h2 className='font-akina text-center text-3xl uppercase font-bold mx-auto z-10'>Orlando</h2>
          <div className='absolute w-full h-2/4 bottom-0 z-0 bg-gradient-to-t from-black/80 to-transparent' />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className={`flex flex-col items-center justify-between w-full group pt-8 pb-12 overflow-hidden bg-[url('/webp/california.webp')] bg-center bg-cover bg-no-repeat cursor-pointer shadow-2xl rounded-[50px]`}>
          <div className='flex relative items-center justify-end px-8 w-full z-10'>
            <IoIosLock className='text-base right-0 w-[50px] h-[50px] p-4 rounded-xl bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
          <h2 className='font-akina text-center text-3xl uppercase font-bold mx-auto z-10'>California</h2>
          <div className='absolute w-full h-2/4 bottom-0 z-0 bg-gradient-to-t from-black/80 to-transparent' />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className={`flex flex-col items-center justify-between w-full group pt-8 pb-12 overflow-hidden bg-[url('/webp/noronha.webp')] bg-center bg-cover bg-no-repeat cursor-pointer shadow-2xl rounded-[50px]`}>
          <div className='flex relative items-center justify-end px-8 w-full z-10'>
            <IoIosLock className='text-base right-0 w-[50px] h-[50px] p-4 rounded-xl bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
          <h2 className='font-akina text-center text-3xl uppercase font-bold mx-auto z-10'>Noronha</h2>
          <div className='absolute w-full h-2/4 bottom-0 z-0 bg-gradient-to-t from-black/80 to-transparent' />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }} className={`flex flex-col items-center justify-between w-full group pt-8 pb-12 overflow-hidden bg-[url('/webp/maceio.webp')] bg-center bg-cover bg-no-repeat cursor-pointer shadow-2xl rounded-[50px]`}>
          <div className='flex relative items-center justify-end px-8 w-full z-10'>
            <IoIosLock className='text-base right-0 w-[50px] h-[50px] p-4 rounded-xl bg-yellow-600 group-hover:scale-110 transition-transform duration-500 ease-in-out' />
          </div>
          <h2 className='font-akina text-center text-3xl uppercase font-bold mx-auto z-10'>Maceio</h2>
          <div className='absolute w-full h-2/4 bottom-0 z-0 bg-gradient-to-t from-black/80 to-transparent' />
        </SwiperSlide>
      </Swiper>
      <div className='absolute top-0 bg-blue-600 h-[60%] w-full -z-0' />
    </div>
  )
}
