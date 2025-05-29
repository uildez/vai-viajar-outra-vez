'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AccordionFAQ from "../components/accordionFAQ";

export default function Member() {
  return (
    <div id='cupons' className='flex flex-col items-center min-h-[100vh] lg:min-h-[80vh] justify-start w-full mx-auto gap-4 px-8 lg:px-40 py-20 bg-yellow-600'>
      <h2 className='text-4xl lg:text-6xl w-full text-center lg:w-3/4 text-blue-600 font-bold font-akina uppercase mb-12'>
        Confira nosso perguntas e respostas
      </h2>
      <div className='flex flex-col-reverse lg:flex-row w-full h-full relative items-end justify-end min-h-[60vh]'>
        <div className="lg:max-w-[50%]">
          <AccordionFAQ />
        </div>
        <img className='lg:absolute lg:mb-0 mb-8 lg:h-[50vh] 2xl:h-[70vh] right-8 lg:-left-[35rem] -bottom-20' src={"/webp/notebook.webp"} alt='Notebook com sistema de acessos dos nossos parceiros' />
      </div>
    </div>
  )

}
