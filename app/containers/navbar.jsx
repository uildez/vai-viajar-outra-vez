'use client';

import Image from 'next/image';
import React from 'react'

import { AnimatePresence, motion, useCycle } from 'motion/react';
import { CgClose } from "react-icons/cg";

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const links = [
    { name: "Home", to: "#inicio", id: 1 },
    { name: "Sobre", to: "#sobre", id: 2 },
    { name: "Guias", to: "#guias", id: 3 },
    { name: "Produtos", to: "#produtos", id: 4 },
    { name: "Cupons", to: "#cupons", id: 5 },
  ];

  return (
    <div className={`fixed w-full flex items-center justify-between h-[100px] px-8 lg:px-40 z-50 bg-blue-600`}>
      <div className='flex w-full h-full items-center justify-between'>
        <img className='w-[80px] lg:w-auto' src={"/webp/logo-vai-viajar.webp"} alt='Logo Vai Viajar Outra Vez' />
        <div className='flex items-center gap-4 lg:gap-20'>
          <div className='flex gap-4'>
            <motion.div
              className="flex items-center gap-12 justify-center h-full"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ translateY: -2, rotate: -2 }}
                  variants={itemVariants}
                  className="text-2xl lg:text-xl text-white"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </div>
          <button className='flex items-center justify-center gap-4 px-6 py-2 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
            {/* <img className='w-[10px] lg:w-auto' src={"/webp/cadeado.webp"} width={150} height={150} alt='Cadeado' /> */}
            Área de Membros
          </button>
          {/* <img onClick={cycleOpen} className='cursor-pointer hover:scale-105' src={"/images/menu-icon.webp"} width={50} height={50} alt='Logo Kemparsk' /> */}
        </div>
      </div>

      {/* <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
            className='fixed top-0 right-0 h-full bg-[#010305]/80 backdrop-blur-xl z-20'
          >
            <button className='absolute text-white right-8 lg:right-40 top-8' onClick={cycleOpen}>{open && <CgClose className='text-4xl' />}</button>
            <motion.div
              className="flex flex-col items-center gap-12 justify-center h-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  onClick={cycleOpen}
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-2xl lg:text-4xl text-white"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence> */}
    </div>
  )
}
