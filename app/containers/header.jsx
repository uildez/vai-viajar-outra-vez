'use client';
import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from "motion/react"
import React from 'react'
import AnimatedSVG from '../components/animatedSVG';

export default function Header () {
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
    <div className={`flex flex-col bg-blue-600 justify-center h-screen w-full overflow-hidden`}>
      <div className={`flex flex-col justify-center lg:h-screen 2xl:h-[80vh] w-full px-8 py-12 lg:py-0 lg:px-40 bg-[url('/webp/header-bg.webp')] lg:bg-[url('/webp/header-bg.webp')] bg-red-500 bg-cover bg-no-repeat bg-right`}>
        <div className='flex flex-col relative gap-8 w-3/4'>
          <AnimatedSVG />
          <h1 className='text-7xl text-yellow-600 font-bold font-akina uppercase'>
            oi viajante,<br />
            seja bem-vindo
          </h1>
          <p className='text-lg 2xl:text-2xl w-3/4'>Está buscando o guia completo para conhecer o Brasil e as melhores cidades internacionais pelo melhor preço? <strong>Aqui é o seu lugar!</strong></p>
        </div>
      </div>
      <main className='w-full bottom-10 pb-20'>
        <motion.div className='absolute left-0 flex gap-0' ref={ref} style={{ x: xTranslation }}>
          <h1 className='text-7xl text-white/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
          <h1 className='text-7xl text-white/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
          <h1 className='text-7xl text-white/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
          <h1 className='text-7xl text-white/10 font-bold font-akina uppercase'>vaiviajaroutravez</h1>
        </motion.div>
      </main>
    </div>
  )
}