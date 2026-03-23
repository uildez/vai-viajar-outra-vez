import React from 'react'
import { TbSquareRoundedCheckFilled } from "react-icons/tb";

export const Grupovip = () => {
    return (
        <div className={`relative flex lg:flex-row flex-col justify-between items-center w-full px-8 py-12 lg:my-40 lg:py-0 lg:px-40 gap-8 lg:gap-20`}>
            <div className='flex flex-col gap-4 w-full items-center pl-0 lg:pl-28 2xl::pl-40 lg:gap-8 order-2 lg:order-1'>
                <div className='flex lg:gap-4 justify-center relative'>
                    <h2 className='text-4xl lg:text-6xl w-full lg:w-3/4 text-yellow-600 text-center font-bold font-akina uppercase'>
                        PARTICIPE TAMBÉM DA NOSSA COMUNIDADE
                    </h2>
                </div>
                <p className='lg:text-base 2xl:text-lg text-blue-600 text-center'>
                    Ao entrar para a nossa comunidade, você tem acesso a tudo que produzimos e além disso você ganha parceiros de viagem que pegam na sua mão para garantir que seus planos saiam do papel com o menor custo possível.
                    O que você recebe imediatamente:
                </p>
                <ol className='ml-4 lg:ml-8 lg:text-base 2xl:text-lg text-blue-600'>
                    <li className='flex items-center gap-4 pt-4'><TbSquareRoundedCheckFilled className='min-w-5 min-h-5 object-cover'/> Mentoria Individual (1h): Uma vídeo chamada comigo para entender suas necessidades e montar seu plano de viagem.</li>
                    <li className='flex items-center gap-4 pt-4'><TbSquareRoundedCheckFilled className='min-w-5 min-h-5 object-cover'/> Suporte VIP no WhatsApp: Acesso ao meu número pessoal para tirar dúvidas e pedir opiniões sobre seus roteiros em tempo real.</li>
                    <li className='flex items-center gap-4 pt-4'><TbSquareRoundedCheckFilled className='min-w-5 min-h-5 object-cover'/> Desconto de 40% em Ilhabela: Hospedagem exclusiva para membros. Esse bônus sozinho já recupera o valor do seu investimento!</li>
                    <li className='flex items-center gap-4 pt-4'><TbSquareRoundedCheckFilled className='min-w-5 min-h-5 object-cover'/> Biblioteca de Conteúdo Completa: Acesso a todos os nossos guias e videos sobre os destinos que ja fomos (Milhas, Curaçao, Lençóis Maranhenses, Planilhas de Gastos e mais).</li>
                    <li className='flex items-center gap-4 pt-4'><TbSquareRoundedCheckFilled className='min-w-5 min-h-5 object-cover'/> Grupos VIPs: Um com alertas diários de passagens baratas e outro com oportunidades reais para acumular milhas e viajar com estratégia.</li>
                </ol>

                <div className='flex flex-col gap-2 items-center mx-auto text-center text-white bg-blue-600 rounded-xl p-8'>
                    <p>Por apenas</p>
                    <p className='flex items-end gap-2'> <span>6x de </span><span className='text-7xl font-bold'>R$ 41,16</span></p>
                    <p>(ou R$ 247 à vista)</p>
                </div>

                <p className='lg:text-base 2xl:text-lg text-blue-600 text-center'>
                    <br/>
                    Teste a comunidade por 7 dias grátis. Entre, use os guias, fale comigo no WhatsApp e tire todas as suas dúvidas. Se não gostar, você simplesmente não assina. Sem pré-pagamento, sem precisar cancelar depois e sem burocracia.
                    {/* Além disso, você conta com nosso suporte pessoal sempre que precisar.

                    Viajar barato não é sorte. É estratégia. E ela começa aqui. */}
                    <br/>
                    <br/>
                    <strong>Investimento após o teste:</strong> Apenas R$ 247 (em até 6x de R$ 41,16).
                </p>
                <a href="https://wa.link/z3re90" target='_blank' className='w-full lg:w-fit text-center items-center justify-center px-6 py-2 text-xl bg-blue-600 text-white rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'>
                    QUERO MEU TESTE GRÁTIS DE 7 DIAS
                </a>
            </div>
            {/* <img className='max-w-[50%] lg:max-w-[25%] object-contain lg:w-auto z-30 order-1 lg:order-2' src={"/webp/iphone.webp"} alt='Mockup de tablet com capa do Ebook Vai Viajar Outra Vez' /> */}
        </div>
    )
}
