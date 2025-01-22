'use client';

import Image from 'next/image';
import React from 'react'
import ProductTitleDown from '../components/productTitleDown';
import ProductTitleUp from '../components/productTitleUp';
import ProductImage from '../components/productImage';

export const Products = () => {
  return (
    <div id='produtos' className='relative'>
      <div className='flex flex-col items-center justify-center w-full py-12 mx-auto gap-12 z-10'>
        <div className='flex flex-col w-full items-center justify-center relative z-10'>
          <h2 className='relative text-7xl text-blue-600 bg-yellow-600 px-8 py-1 font-bold font-akina uppercase shadow-2xl'>
            Compre Nossos
            <ProductTitleUp />
          </h2>
          <h2 className='relative text-7xl text-blue-600 -mt-1 -rotate-1 bg-yellow-600 px-8 py-1 font-bold font-akina uppercase shadow-2xl'>
            Produtos
            <ProductTitleDown />
          </h2>
        </div>
        <div className='flex gap-4 w-full items-center z-10'>
          <div className='flex flex-col items-center gap-8'>
            <Image src={'/webp/produto-bone.webp'} className='w-full rounded-2xl' width={500} height={500} alt='Boné Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-2xl rounded-[20px] uppercase px-8 py-2 hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex flex-col items-center gap-8'>
            <Image src={'/webp/produto-copo.webp'} className='w-full rounded-2xl' width={500} height={500} alt='Copo Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-2xl rounded-[20px] uppercase px-8 py-2 hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex flex-col items-center gap-8'>
            <Image src={'/webp/produto-mala.webp'} className='w-full rounded-2xl' width={500} height={500} alt='Mala Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-2xl rounded-[20px] uppercase px-8 py-2 hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
          <div className='flex relative flex-col items-center gap-8'>
            <ProductImage />
            <Image src={'/webp/produto-moletom.webp'} className='w-full rounded-2xl' width={500} height={500} alt='Moletom Vai Viajar Outra Vez' />
            <a
              href="#"
              className='w-fit text-center border-2 border-white text-white text-2xl rounded-[20px] uppercase px-8 py-2 hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
              target='_blank'
            >
              Comprar Agora
            </a>
          </div>
        </div>


        <div className='h-[100px] w-full bg-yellow-600 z-10'>
        </div>
      </div>
      <div className='absolute bottom-0 bg-blue-600 h-[50%] w-full -z-0'/>
    </div>
  )
}
