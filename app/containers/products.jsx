'use client';

import Image from 'next/image';
import React from 'react'
import ProductTitleDown from '../components/productTitleDown';
import ProductTitleUp from '../components/productTitleUp';
import ProductImage from '../components/productImage';
import Marquee from '../components/marquee';
import { motion } from 'motion/react';

export default function Products() {
  return (
    <div id='produtos' className='relative'>
      <div className='flex flex-col items-center justify-center w-full py-12 mx-auto gap-12 z-10'>
        <div className='flex flex-col w-full items-center justify-center relative z-10'>
          <h2 className='relative text-3xl lg:text-7xl text-blue-600 bg-yellow-600 px-8 py-1 font-bold font-akina uppercase shadow-2xl'>
            Compre Nossos
            <ProductTitleUp />
          </h2>
          <h2 className='relative text-3xl lg:text-7xl text-blue-600 -mt-1 -rotate-1 bg-yellow-600 px-8 py-1 font-bold font-akina uppercase shadow-2xl'>
            Produtos
            <ProductTitleDown />
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-4 lg:gap-4 w-full items-center z-10 px-4 lg:px-0'>
          <div className='flex flex-col items-center gap-2 lg:gap-8 group'>
            <Image src={'/webp/grupo-vip.webp'} className='w-full rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out' width={500} height={500} alt='Boné Vai Viajar Outra Vez' />
            <a
              href="https://pay.hub.la/xTBEymQhnuKQaRH8INZe"
              className='w-fit text-center border-2 border-white text-white text-sm lg:text-2xl rounded-[20px] uppercase px-8 py-2 group-hover:rotate-2 group-hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex flex-col items-center gap-2 lg:gap-8 group'>
            <Image src={'/webp/ebook-vai-viajar.webp'} className='w-full rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out' width={500} height={500} alt='Boné Vai Viajar Outra Vez' />
            <a
              href="https://pay.hub.la/vJ5Nu2mcYOnm6A5a3OrL"
              className='w-fit text-center border-2 border-white text-white text-sm lg:text-2xl rounded-[20px] uppercase px-8 py-2 group-hover:rotate-2 group-hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex flex-col items-center gap-2 lg:gap-8 group'>
            <Image src={'/webp/produto-bone.webp'} className='w-full rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out' width={500} height={500} alt='Boné Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-sm lg:text-2xl rounded-[20px] uppercase px-8 py-2 group-hover:rotate-2 group-hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          {/* <div className='flex flex-col items-center gap-2 lg:gap-8 group'>
            <Image src={'/webp/produto-copo.webp'} className='w-full rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out' width={500} height={500} alt='Copo Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-sm lg:text-2xl rounded-[20px] uppercase px-8 py-2 group-hover:rotate-2 group-hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex flex-col items-center gap-2 lg:gap-8 group'>
            <Image src={'/webp/produto-mala.webp'} className='w-full rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out' width={500} height={500} alt='Mala Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-sm lg:text-2xl rounded-[20px] uppercase px-8 py-2 group-hover:rotate-2 group-hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex relative flex-col items-center gap-2 lg:gap-8 group'>
            <ProductImage />
            <Image src={'/webp/produto-moletom.webp'} className='w-full rounded-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out' width={500} height={500} alt='Moletom Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-sm lg:text-2xl rounded-[20px] uppercase px-8 py-2 group-hover:rotate-2 group-hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div> */}
        </div>


        <div className='flex h-[100px] w-full bg-yellow-600 z-10'>
          <Marquee textContent={"@vaiviajaroutravez @vaiviajaroutravez @vaiviajaroutravez @vaiviajaroutravez"} personalized={"leading-[-0.05em] item uppercase text-blue-600 font-akina font-bold text-3xl flex-nowrap"} />
        </div>
      </div>
      <motion.section
        initial={{ background: "rgba(0,0,0,0)" }}
        whileInView={{ background: "#0055cf" }}
        viewport={{ once: true }}
        transition={{ delay: 1, amount: 5, duration: .5, ease: 'easeInOut' }}
        className='absolute bottom-0 h-[80%] lg:h-[50%] w-full -z-0'
      />
    </div>
  )
}
