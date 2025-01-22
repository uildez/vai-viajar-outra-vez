'use client'

import Image from 'next/image'
import React from 'react'
import AboutTitle from '../components/aboutTitle'

export const About = () => {
  return (
    <div className='flex bg-blue-600' id='sobre'>
      <div className={`relative flex lg:flex-row flex-col justify-center w-full px-8 py-12 lg:py-0 lg:px-40 gap-20`}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 w-2/5'>
          <img className='w-[80px] lg:w-auto z-0' src={"/webp/about-1.webp"} alt='Foto de viagem para Las Vegas com um casal' />
          <img className='w-[80px] lg:w-auto z-0' src={"/webp/about-2.webp"} alt='Foto de viagem para Disney em Orlando' />
          <img className='w-[80px] lg:w-auto z-0' src={"/webp/about-3.webp"} alt='Foto de viagem para Noronha' />
          <img className='w-[80px] lg:w-auto z-0' src={"/webp/about-4.webp"} alt='Foto de viagem para Maragogi' />
        </div>
        <div className='absolute h-[60vh] left-[40%] top-1/2 transform -translate-x-1/2 -translate-y-[65%] z-20 w-[400px]'>
          <img className='absolute w-[50px] lg:w-auto z-30' src={"/webp/man-about.webp"} alt='Foto de viagem para Maragogi' />
          <img className='absolute w-[50px] lg:w-auto ml-4 z-20' src={"/webp/man-bg-silhueta.webp"} alt='Foto de viagem para Maragogi' />
        </div>
        <div className='flex flex-col gap-1 w-3/5 pl-40'>
          <div className='flex gap-8 relative'>
            <h2 className='text-6xl text-yellow-600 font-bold font-akina uppercase'>
              Sobre
            </h2>
            <AboutTitle className="w-[60px] h-[60px]"/>
          </div>
          <p className='text-lg'>
            Oi, somos a <strong>Elizabete</strong> e <strong>Rodrigo</strong>, um casal apaixonado por viagens, e através da <strong>“Vai Viajar Outra Vez?”</strong> buscamos mostrar experiências autênticas, compartilhando dicas práticas, acessíveis e experiências reais para nossa audiência.
            <br />
            <br />
            Nosso conteúdo visa principalmente sair do comum, e mostrar algo além de resorts e hotéis luxuosos, que estão distante da realidade muitas pessoas.
            <br />
            <br />
            Com a chegada dos nossos filhos, expandimos nosso conteúdo com dicas que também envolvam crianças, inspirando novas família a explorarem o mundo em família.
            <br />
            <br />
            Nosso conteúdo é pensado para envolver e engajar nossa comunidade, entregando valor tanto para os seguidores quanto para as marcas que nos acompanham.
          </p>
        </div>
      </div>
    </div>
  )
}
