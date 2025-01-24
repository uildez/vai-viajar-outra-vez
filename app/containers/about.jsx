'use client'

import React, { useEffect } from 'react'
import AboutTitle from '../components/aboutTitle'

import gsap from "gsap";
import { motion } from 'motion/react';

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Vindo de baixo
  },
  visible: {
    opacity: 1,
    y: 0, // Posição inicial
    transition: {
      duration: 0.5, // Duração da animação
    },
  },
};

const gridVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.3, // Delay entre os itens na cascata
      staggerDirection: 1, // Ordem normal
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

export default function About() {
  useEffect(() => {
    const elements = [".image-man", ".image-border"];
    const delays = [0.5, 0.6];

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 50,
          delay: delays[index],
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    });

    const followMouse = (e) => {
      gsap.to(".image-man", {
        y: (e.clientY - window.innerHeight / 2) / 4,
        duration: 0.5,
      });
      gsap.to(".image-border", {
        y: (e.clientY - window.innerHeight / 2) / 3,
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', followMouse);

    return () => {
      window.removeEventListener('mousemove', followMouse);
    };
  }, []);

  const images = [
    {
      src: "/webp/about-1.webp",
      alt: "Foto de viagem para Las Vegas com um casal",
    },
    {
      src: "/webp/about-2.webp",
      alt: "Foto de viagem para Disney em Orlando",
    },
    {
      src: "/webp/about-3.webp",
      alt: "Foto de viagem para Noronha",
    },
    {
      src: "/webp/about-4.webp",
      alt: "Foto de viagem para Maragogi",
    },
  ];

  return (
    <div className='flex bg-blue-600' id='sobre'>
      <div className={`relative flex lg:flex-row flex-col justify-center w-full px-8 py-12 lg:py-0 lg:px-40 gap-8 lg:gap-20`}>
        <motion.div
          className="grid grid-cols-2 lg:grid-rows-2 h-auto gap-4 w-full lg:w-2/5"
          initial="hidden"
          whileInView="visible" // Dispara a animação ao entrar na tela
          viewport={{ once: false, amount: 0.3 }} // Configura quando a animação é disparada
          variants={gridVariants} // Variantes do grid
        >
          {images.map(({ src, alt }, index) => (
            <motion.img
              key={index}
              src={src}
              alt={alt}
              className="w-full h-auto z-0"
              variants={imageVariants}
            />
          ))}
        </motion.div>
        <div className='hidden lg:block absolute h-[60vh] left-[40%] top-1/2 transform -translate-x-1/2 -translate-y-[65%] z-20 w-[400px]'>
          <img className='absolute w-[50px] lg:w-auto z-30 image-man' src={"/webp/man-about.webp"} alt='Foto de viagem para Maragogi' />
          <img className='absolute w-[50px] lg:w-auto ml-4 z-20 image-border' src={"/webp/man-bg-silhueta.webp"} alt='Foto de viagem para Maragogi' />
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-3/5 pl-0 lg:pl-40 lg:gap-8'>
          <div className='flex lg:gap-4 justify-center lg:justify-start relative'>
            <h2 className='text-4xl lg:text-6xl text-yellow-600 font-bold font-akina uppercase'>
              Sobre
            </h2>
            <AboutTitle />
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
