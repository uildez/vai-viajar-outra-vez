import React from 'react'

export const Ebook = () => {
    return (
        <div className={`relative flex lg:flex-row flex-col justify-between items-center w-full px-8 py-12 lg:my-40 lg:py-0 lg:px-40 gap-8 lg:gap-20`}>
            <img className='max-w-[100%] lg:max-w-[30%] object-contain lg:w-auto z-30' src={"/webp/tablet-ebook.webp"} alt='Mockup de tablet com capa do Ebook Vai Viajar Outra Vez' />
            <div className='flex flex-col w-full lg:w-3/5 pl-0 lg:pl-28 2xl::pl-40 lg:gap-8'>
                <div className='flex lg:gap-4 justify-center lg:justify-start relative'>
                    <h2 className='text-4xl lg:text-6xl text-yellow-600 font-bold font-akina uppercase'>
                        Viajar mais e pagar menos. Sim, é real.
                    </h2>
                </div>
                <p className='lg:text-base 2xl:text-lg text-blue-600'>
                    Depois de 13 anos voando com milhas e acumulando a experiência de mais de 80 destinos, reuni tudo o que aprendi num guia simples, direto e feito para você que ainda está começando. Sem enrolação e sem jargões: apenas o que funciona de verdade para você começar a emitir passagens baratas pelo Brasil e até para o outro lado do mundo.
                </p>

                <span className='text-blue-600 -mb-4'>Apenas R$ 57,00 (ou em até 6x).</span>
                <a href="https://hub.la/r/gVFCUbdllWM53RXhRYYM" target='_blank' className='w-full lg:w-fit text-center items-center justify-center px-6 py-2 text-xl bg-blue-600 text-white rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
                    QUERO O MEU E-BOOK AGORA
                </a>
            </div>
        </div>
    )
}
