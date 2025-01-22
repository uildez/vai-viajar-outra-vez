'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Member() {
  return (
    <div id='cupons' className='flex relative items-start h-screen justify-start w-full mx-auto gap-4 px-8 lg:px-40 py-12 bg-yellow-600'>
      <div className='flex flex-col justify-start items-start gap-12'>
        <h2 className='text-6xl w-3/4 text-blue-600 font-bold font-akina uppercase'>
          Seja um membro por apenas R$ 9,90 /mês
        </h2>
        <p className='text-lg w-2/4 text-black'>Aprenda a economizar em cada etapa da sua viagem, aproveite benefícios exclusivos e entenda a estratégia que torna possível desbravar o mundo como um expert. <strong>Assine agora!</strong></p>
        <a href="#" target='_blank' className='items-center justify-center px-6 py-2 text-xl bg-blue-600 text-white rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
          Comere Agora!
        </a>
      </div>
      <img className='absolute lg:w-auto right-20 bottom-20' src={"/webp/notebook.webp"} alt='Notebook com sistema de acessos dos nossos parceiros' />
    </div>
  )

}
