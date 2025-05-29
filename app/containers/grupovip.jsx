import React from 'react'

export const Grupovip = () => {
    return (
        <div className={`relative flex lg:flex-row flex-col justify-between items-center w-full px-8 py-12 lg:my-40 lg:py-0 lg:px-40 gap-8 lg:gap-20`}>
            <div className='flex flex-col gap-4 w-full items-center pl-0 lg:pl-28 2xl::pl-40 lg:gap-8 order-2 lg:order-1'>
                <div className='flex lg:gap-4 justify-center relative'>
                    <h2 className='text-4xl lg:text-6xl w-full lg:w-3/4 text-yellow-600 text-center font-bold font-akina uppercase'>
                        PARTICIPE TAMBÉM DA NOSSA COMUNIDADE
                    </h2>
                </div>
                <p className='lg:text-base 2xl:text-lg text-blue-600'>
                    Ao entrar para a nossa comunidade, você recebe acesso ao nosso ebook e participa de dois grupos VIP:
                </p>
                <ol className='list-disc ml-4 lg:ml-8 lg:text-base 2xl:text-lg text-blue-600'>
                    <li>Um com alertas diários de passagens baratas, nacionais e internacionais</li>
                    <li>Outro com promoções, transferências bonificadas e oportunidades reais para acumular milhas</li>
                </ol>

                <p className='lg:text-base 2xl:text-lg text-blue-600'>
                    Além disso, você conta com nosso suporte pessoal sempre que precisar.

                    Viajar barato não é sorte. É estratégia. E ela começa aqui.
                </p>
                <a href="#produtos" className='w-full lg:w-fit text-center items-center justify-center px-6 py-2 text-xl bg-blue-600 text-white rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
                    Quero participar da comunidade
                </a>
            </div>
            {/* <img className='max-w-[50%] lg:max-w-[25%] object-contain lg:w-auto z-30 order-1 lg:order-2' src={"/webp/iphone.webp"} alt='Mockup de tablet com capa do Ebook Vai Viajar Outra Vez' /> */}
        </div>
    )
}
