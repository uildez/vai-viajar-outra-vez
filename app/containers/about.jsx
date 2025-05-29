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
        <div className='hidden lg:block absolute h-[60vh] left-[40%] top-1/3 transform -translate-x-1/2 -translate-y-[65%] z-20 w-[300px] 2xl:w-[400px]'>
          <img className='absolute w-[50px] lg:w-auto z-30 image-man' src={"/webp/man-about.webp"} alt='Foto de viagem para Maragogi' />
          <img className='absolute w-[50px] lg:w-auto ml-4 z-20 image-border' src={"/webp/man-bg-silhueta.webp"} alt='Foto de viagem para Maragogi' />
        </div>
        <div className='flex flex-col gap-4 w-full lg:w-3/5 pl-0 lg:pl-28 2xl::pl-40 lg:gap-8'>
          <div className='flex lg:gap-4 justify-center lg:justify-start relative'>
            <h2 className='text-4xl lg:text-6xl text-yellow-600 font-bold font-akina uppercase'>
              Sobre
            </h2>
            <AboutTitle />
          </div>
          <p className='lg:text-base 2xl:text-lg'>
            Oi, somos a Elizabete e o Rodrigo, um casal apaixonado por viagens — e hoje, mentores de quem quer conhecer o mundo de forma mais inteligente e acessível.
            <br/><br/>
            Através do “Vai Viajar Outra Vez?”, mostramos caminhos que talvez você ainda não tenha percebido. Nosso objetivo é ajudar você a economizar até 50% nas suas viagens, com estratégias práticas, guias testados por nós e muita experiência real na bagagem.
            <br/><br/>
            Já viajamos quase todo o Brasil — de Norte a Sul — e fomos até o Japão. Viajamos com nossos filhos, mas sem abrir mão do conforto, de trilhas, de cachoeiras, de aventuras e de experiências culturais autênticas. Nossas viagens vão muito além de resorts all inclusive. Fazemos expedições pelo Brasil e pelo mundo, e a cada 15 dias estamos em um novo destino.
            <br/><br/>
            Agora, esse é o nosso trabalho: te mostrar o mundo — e o caminho para chegar lá.
            <br/><br/>
            Nosso conteúdo é pensado para envolver, inspirar e entregar valor real para quem nos acompanha. Seja você uma família, um casal ou alguém que sonha em explorar mais, estamos aqui para caminhar com você.
          </p>
        </div>
      </div>
    </div>
  )
}
