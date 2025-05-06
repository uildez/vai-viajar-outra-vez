import React from 'react'

export const Grupovip = () => {
    return (
        <div className={`relative flex lg:flex-row flex-col justify-between items-center w-full px-8 py-12 lg:my-40 lg:py-0 lg:px-40 gap-8 lg:gap-20`}>
            <div className='flex flex-col gap-4 w-full lg:w-3/5 pl-0 lg:pl-28 2xl::pl-40 lg:gap-8 order-2 lg:order-1'>
                <div className='flex lg:gap-4 justify-center lg:justify-start relative'>
                    <h2 className='text-4xl lg:text-6xl text-yellow-600 font-bold font-akina uppercase'>
                        O que você encontra no nosso Grupo Exclusivo
                    </h2>
                </div>
                <p className='lg:text-base 2xl:text-lg text-blue-600'>
                    Você vai receber alertas diários de passagens baratas, tanto pelo Brasil quanto para destinos internacionais – inclusive voos entre países fora do Brasil.
                    Além disso, terá acesso a outro grupo com as melhores promoções para acumular milhas e bônus de transferência, e o mais importante: meu suporte pessoal sempre que precisar.
                    Viajar barato não é sorte. É estratégia. E ela começa aqui.
                </p>
                <a href="#produtos" className='w-full lg:w-fit text-center items-center justify-center px-6 py-2 text-xl bg-blue-600 text-white rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
                    Quero entrar no Grupo VIP
                </a>
            </div>
            <img className='max-w-[50%] lg:max-w-[25%] object-contain lg:w-auto z-30 order-1 lg:order-2' src={"/webp/iphone.webp"} alt='Mockup de tablet com capa do Ebook Vai Viajar Outra Vez' />
        </div>
    )
}
