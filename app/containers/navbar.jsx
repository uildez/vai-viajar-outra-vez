'use client';

import React, { useEffect, useState } from 'react'

import { IoLockClosedOutline } from "react-icons/io5";
import { AnimatePresence, motion } from 'motion/react';
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const itemVariants = {
  closed: {
    opacity: 0,
    y: -20, // Os itens vêm de cima
  },
  open: {
    opacity: 1,
    y: 0, // Ficam na posição inicial
    transition: {
      duration: 0.5, // Duração da animação para cada item
    },
  },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2, // Atraso entre as animações (cascata inversa)
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3, // Atraso entre as animações (cascata normal)
      staggerDirection: 1,
    },
  },
};

export const runtime = 'edge';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { name: 'Home', to: '#inicio', id: 1 },
    { name: 'Sobre', to: '#sobre', id: 2 },
    { name: 'Guias', to: '#guias', id: 3 },
    { name: 'Produtos', to: '#produtos', id: 4 },
    { name: 'Cupons', to: '#cupons', id: 5 },
  ];

  return (
    <div className="fixed w-full flex items-center justify-between h-[80px] lg:h-[100px] px-8 lg:px-40 z-50 bg-blue-600">
      <div className="flex w-full h-full items-center justify-between">
        <img
          className="w-[80px] lg:w-[120px] 2xl:w-[150px]"
          src={'/webp/logo-vai-viajar.webp'}
          alt="Logo Vai Viajar Outra Vez"
        />
        <div className="items-center gap-4 lg:gap-20 hidden lg:flex">
          <div className="flex gap-4">
            <motion.div
              className="flex items-center gap-8 2xl:gap-12 justify-center h-full"
              initial="closed"
              animate="open"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ translateY: -2, rotate: -2 }}
                  variants={itemVariants}
                  className="text-2xl lg:text-lg 2xl:text-xl text-white"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </div>
          <button className="flex items-center justify-center gap-4 px-6 py-2 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500">
            <IoLockClosedOutline />
            Área de Membros
          </button>
        </div>
        <button className="block lg:hidden" onClick={() => setOpenMenu((prev) => !prev)}>
          {openMenu ? <CgClose className="text-4xl text-white" /> : <HiBars2 className="text-4xl text-white" />}
        </button>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.aside
            initial={{ width: '0%', height: 0, opacity: 0  }}
            animate={{ width: '100%', height: "100%", opacity: 1 }}
            exit={{ width: '100%', height: 0, transition: { delay: 0.3, duration: 0.5 } }}
            className="fixed top-0 right-0 px-2 pt-2 z-20"
          >
            <motion.div
              className="flex relative flex-col items-center bg-yellow-600 shadow-2xl rounded-2xl pt-32 gap-8 px-8 justify-start pb-20"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <button className="absolute bg-blue-600 rounded-full font-akina uppercase px-4 py-2 right-4 top-4 lg:hidden" onClick={() => setOpenMenu((prev) => !prev)}>
                fechar
              </button>
              {links.map(({ name, to, id }) => (
                <motion.a
                  onClick={() => setOpenMenu(false)}
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-3xl w-full text-left px-6 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500"
                >
                  {name}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className='flex items-center mx-auto gap-4'>
                <a href='' className='flex items-center justify-center rounded-full bg-yellow-600 hover:bg-blue-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
                  <FaInstagram className="text-2xl text-black" />
                </a>
                <a href='' className='flex items-center justify-center rounded-full bg-yellow-600 hover:bg-blue-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
                  <FaYoutube className="text-2xl text-black" />
                </a>
                <a href='' className='flex items-center justify-center rounded-full bg-yellow-600 hover:bg-blue-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
                  <FaTiktok className="text-2xl text-black" />
                </a>
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}