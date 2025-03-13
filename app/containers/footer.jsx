'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_3y6maqf',
        'template_5f8alcq',
        e.currentTarget,
        '8kavuSOIAVRwe-zob'
      )
      .then(
        (result) => {
          console.log(result)
          setLoading(false);
          setEmail("")
          setSend(true)
        },
        (error) => {
          console.log(error)
          setLoading(false);
          setMessage('Erro ao enviar mensagem.');
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full mx-auto gap-12 lg:gap-4 px-8 lg:px-40 py-20 bg-blue-800'>
      <img className='w-[200px] h-auto' src={'/webp/logo-grande.webp'} alt='Logo da Vai Viajar Outra Vez' />
      {send ?
        <div className='flex flex-col items-start'>
          <h2
            className="flex flex-col text-4xl text-center lg:text-left lg:text-lg 2xl:text-xl text-white font-extrabold font-sans"
          >
            Inscrição realizada
            <span className='text-base font-light mt-4 font-redonda'>
              Agora você irá receber novidades sobre Viagens e muito mais
            </span>
          </h2>
        </div>
        :
        <div className='flex flex-col gap-2'>
          <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row items-center gap-2'>
            <div className='relative gap-4'>
              <MdEmail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
              <input
                className='rounded-2xl px-10 py-2 border border-gray-300 focus:ring-2 text-black placeholder:text-black focus:ring-yellow-600 focus:outline-none'
                type='email'
                placeholder='Seu email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type='submit' className='w-full lg:w-fit bg-yellow-600 text-white rounded-2xl px-4 py-2 uppercase font-redonda font-bold hover:bg-yellow-600 hover:rotate-2 hover:-translate-y-2 transition-all duration-500'>
              {loading ?
                <div className='flex gap-2 items-center'>
                  <p>Enviando</p>
                  <AiOutlineLoading3Quarters className='animate-spin' />
                </div>
                :
                "Enviar"
              }
            </button>
          </form>
          {message && <p className='text-white'>{message}</p>}
        </div>
      }
      <div className='flex items-center gap-4'>
        <a href='https://www.instagram.com/vaiviajaroutravez/' target='_blank' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
          <FaInstagram className='text-2xl text-blue-800' />
        </a>
        <a href='https://www.youtube.com/@vaiviajaroutravez' target='_blank' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
          <FaYoutube className='text-2xl text-blue-800' />
        </a>
        <a href='https://www.tiktok.com/@vaiviajaroutravez' target='_blank' className='flex items-center justify-center rounded-full bg-white hover:bg-yellow-600 hover:-translate-y-2 hover:scale-105 w-[50px] h-[50px] transition-all duration-500 ease-in-out'>
          <FaTiktok className='text-2xl text-blue-800' />
        </a>
      </div>
    </div>
  );
}