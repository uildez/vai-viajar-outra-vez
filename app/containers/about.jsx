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
          <p className='lg:text-[15px] 2xl:text-lg'>
            Oi, somos a Elizabete e o Rodrigo. Mais do que um casal apaixonado por viagens, hoje somos os mentores de quem quer conhecer o mundo de forma inteligente, acessível e, acima de tudo, sem perder tempo e dinheiro.
            <br /><br />
            Através do “Vai Viajar Outra Vez?”, nós não apenas mostramos caminhos. Nós pegamos na sua mão. Nosso objetivo é fazer com que você economize muito nas suas próximas viagens usando as mesmas estratégias práticas e guias que já testamos em mais de 80 destinos pelo mundo. Já pisamos em quase todos os continentes, só falta a Oceania para a nossa conta, e toda essa bagagem está à sua disposição.
            <br /><br />
            Já viajamos quase todo o Brasil com nossos filhos e mostramos que é possível unir o conforto de uma viagem em família com a autenticidade de trilhas e cachoeiras. Nossa paixão é viver viagens reais e pé no chão, explorando novos lugares e lançando um guia de destino inédito a cada 15 dias para os nossos alunos.
            <br /><br />
            Agora, o nosso trabalho é te entregar esse mapa. E tem mais: nós damos o suporte direto no WhatsApp e uma call individual de 1h para desenhar o seu plano específico. Além disso, os membros ativos da comunidade garantem 40% de desconto na nossa hospedagem em Ilhabela, um benefício exclusivo que já paga o seu investimento na mentoria.
            <br /><br />
            Nosso conteúdo é pensado para inspirar e entregar valor real. Seja você uma família, um casal ou um viajante solo, estamos aqui para caminhar com você até o seu próximo embarque.          </p>
        </div>
      </div>
    </div>
  )
}
