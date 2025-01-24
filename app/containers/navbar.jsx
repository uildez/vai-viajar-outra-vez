'use client';

import React from 'react'

import { motion } from 'motion/react';
import { IoLockClosedOutline } from "react-icons/io5";

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

export default function Navbar() {
  const links = [
    { name: "Home", to: "#inicio", id: 1 },
    { name: "Sobre", to: "#sobre", id: 2 },
    { name: "Guias", to: "#guias", id: 3 },
    { name: "Produtos", to: "#produtos", id: 4 },
    { name: "Cupons", to: "#cupons", id: 5 },
  ];

  return (
    <div className={`fixed w-full flex items-center justify-between h-[80px] lg:h-[100px] px-8 lg:px-40 z-50 bg-blue-600`}>
      <div className='flex w-full h-full items-center justify-between'>
        <img className='w-[80px] lg:w-auto' src={"/webp/logo-vai-viajar.webp"} alt='Logo Vai Viajar Outra Vez' />
        <div className='items-center gap-4 lg:gap-20 hidden lg:flex'>
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
            <IoLockClosedOutline />
            Área de Membros
          </button>
        </div>
      </div>
    </div>
  )
}
