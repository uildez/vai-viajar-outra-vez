'use client';
import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from "motion/react"
import React from 'react'
import AnimatedSVG from '../components/animatedSVG';
import Marquee from '../components/marquee';

const textLines = ["Oi Viajante,", "Seja Bem-vindo"];
const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cascata de 0.1 segundos entre as letras
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};



export default function Header() {
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
    <div className={`flex flex-col relative bg-blue-600 justify-center h-screen lg:max-w-[100vw] overflow-hidden`}>
      <div className={`flex flex-col justify-end lg:justify-center h-[90vh] lg:h-[80vh] w-full px-8 py-12 lg:py-0 lg:px-40 pt-40 lg:pt-0 bg-[url('/webp/header-bg-mobile.webp')] lg:bg-[url('/webp/header-bg.webp')] bg-cover bg-no-repeat bg-bottom lg:bg-right`}>
        <div className='flex flex-col relative gap-8 w-full lg:w-3/4'>
          <AnimatedSVG />
          <motion.div
            className="text-left"
            initial="hidden"
            animate="visible"
            variants={letterContainer}
          >
            {textLines.map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                className="overflow-hidden"
                variants={letterContainer}
              >
                <motion.h1
                  className="text-4xl text-center lg:text-left lg:text-7xl text-yellow-600 font-bold font-akina uppercase"
                >
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      variants={letterVariant}
                      className={`${char === " " ? "inline-block w-2" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>
            ))}
          </motion.div>
          <p className='text-base 2xl:text-2xl w-full lg:w-3/4 text-center lg:text-left'>
            Se você quer aprender a viajar mais, gastando menos, esse é o seu lugar.
            Aqui você recebe alertas, dicas e caminhos práticos pra transformar seus planos em embarques reais.<br /><br />
            Enquanto muitos ainda estão procurando, quem está aqui já está planejando.
            Não fique de fora — entre agora e viaje com estratégia.
          </p>
          <a href='https://pay.hub.la/xTBEymQhnuKQaRH8INZe' target='_blank' className="flex w-full lg:w-2/4 lg:text-2xl items-center justify-center gap-4 px-6 py-2 bg-yellow-600 text-blue-600 rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500">
            Quero aprender
          </a>
        </div>
      </div>

      <main className='absolute -bottom-4 max-h-[80px] lg:bottom-10 w-screen overflow-hidden pb-20'>
        <Marquee textContent={"vaiviajaroutravez vaiviajaroutravez vaiviajaroutravez vaiviajaroutravez"} personalized={"item flex-nowrap text-4xl lg:text-7xl text-white/10 font-bold font-akina uppercase"} />
      </main>
    </div>
  )
}