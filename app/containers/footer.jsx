'use client';

import React from 'react'
import { MdEmail } from 'react-icons/md';

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full mx-auto gap-12 lg:gap-4 px-8 lg:px-40 py-20 bg-blue-800'>
      <img className='w-[200px] h-auto' src={"/webp/logo-grande.webp"} alt='Logo da Vai Viajar Outra Vez' />
      <form action="" className="flex flex-col lg:flex-row items-center gap-2">
        <div className="relative gap-4">
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            className="rounded-2xl px-10 py-2 border border-gray-300 focus:ring-2 placeholder:text-black focus:ring-yellow-600 focus:outline-none"
            type="email"
            placeholder="Seu email"
          />
        </div>
        <button className="w-full lg:w-fit bg-yellow-600 text-white rounded-2xl px-4 py-2 uppercase font-redonda font-bold hover:bg-yellow-500">
          Enviar
        </button>
      </form>
      <div className='flex items-center gap-4'>
        <a href='' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
          <FaInstagram className="text-2xl text-blue-800" />
        </a>
        <a href='' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
          <FaYoutube className="text-2xl text-blue-800" />
        </a>
        <a href='' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
          <FaTiktok className="text-2xl text-blue-800" />
        </a>
      </div>
    </div>
  )
}
