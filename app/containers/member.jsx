'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Member() {
  return (
    <div id='cupons' className='flex flex-col-reverse lg:flex-row relative items-start min-h-[100vh] lg:min-h-[80vh] justify-start w-full mx-auto gap-4 px-8 lg:px-40 py-20 bg-yellow-600'>
      <div className='flex flex-col justify-start items-start gap-12'>
        <div className='flex flex-col w-full'>
          <h2 className='text-3xl lg:text-4xl w-full lg:w-2/4 text-blue-600 font-akina uppercase'>
            Ainda na dúvida sobre o nosso Grupo VIP?
          </h2>
          <h2 className='text-5xl lg:text-6xl w-full lg:w-2/4 text-blue-600 font-bold font-akina uppercase'>
            Comece pelo free!
          </h2>
        </div>
        <p className='text-lg w-full lg:w-2/4 text-black'>
          Não tem certeza se o VIP é pra você? Sem problema.
          Entra agora no nosso grupo free e tenha um gostinho do que acontece lá dentro.
          <br />
          <br />
          Eu compartilho cerca de 20% do conteúdo do VIP — e já te adianto: mesmo esse “pouquinho” pode te render uma baita economia.
          <br />
          <br />
          Fique o tempo que quiser.
          Às vezes, é justamente a emissão que você precisava que aparece lá.
          <br />
          <br />
          Mas se isso é só o começo… imagina o que rola no VIP?
          A diferença entre economizar R$500 e R$5.000 numa viagem pode estar num simples print.
          E no VIP, eles chegam primeiro.
          <br />
          <br />
          Entra no free, espiadinha liberada.
        </p>
        <a href="https://chat.whatsapp.com/CP9kuO1Ewp62cpv9B9uKUC" target='_blank' className='w-full lg:w-fit text-center items-center justify-center px-6 py-2 text-xl bg-blue-600 text-white rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
          Entrar no Grupo Free
        </a>
      </div>
      <img className='lg:absolute lg:mb-0 mb-8 lg:h-[50vh] 2xl:h-[70vh] right-8 lg:right-20 bottom-20' src={"/webp/notebook.webp"} alt='Notebook com sistema de acessos dos nossos parceiros' />
    </div>
  )

}
