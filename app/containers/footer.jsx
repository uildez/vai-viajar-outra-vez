'use client';

import Image from 'next/image'
import React from 'react'

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <div className='flex items-center justify-between w-full mx-auto gap-4 px-8 lg:px-40 py-20 bg-blue-800'>
      <img className='w-[200px] h-auto' src={"/webp/logo-grande.webp"} alt='Logo da Vai Viajar Outra Vez' />
      <form action="">
        <input className='rounded-2xl px-4 py-2' type="email" placeholder='Seu email'/>
        <button className='bg-yellow-600 rounded-2xl px-4 py-2 uppercase font-redonda font-bold'>Enviar</button>
      </form>
      <div className='flex items-center gap-4'>
        <a href='' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-4 w-[50px] h-[50px]'>
          <FaInstagram className="text-2xl text-blue-800" />
        </a>
        <a href='' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-4 w-[50px] h-[50px]'>
          <FaYoutube className="text-2xl text-blue-800" />
        </a>
        <a href='' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-4 w-[50px] h-[50px]'>
          <FaTiktok className="text-2xl text-blue-800" />
        </a>
      </div>
    </div>
  )
}
