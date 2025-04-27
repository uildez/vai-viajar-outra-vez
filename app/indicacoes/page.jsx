'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../containers/navbar'
import Footer from '../containers/footer'

export default function Page() {
    const [indications, setIndications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbwTTkFdvgNOTbaS4sbufyatIE-4TShk95efE7rtS6aoxE10HTpnBIbjVu97dHTWDwTG/exec")
            .then(response => response.json())
            .then(data => {
                setIndications(data);
                setTimeout(() => {
                    setLoading(false);
                }, 5000);
            })
            .catch(error => {
                console.error("Erro ao buscar indicações:", error);
                setTimeout(() => {
                    setLoading(false);
                }, 5000);
            });
        setLoading(false)
    }, []);

    return (
        <div className="font-redonda overflow-hidden max-w-screen min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center mt-8 lg:mt-20 px-8 py-12 lg:py-0 lg:px-40 mb-20 min-h-[80vh]">
                <motion.h2
                    initial={{ opacity: 0, y: -500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    className="flex flex-col mt-16 text-3xl text-center lg:text-3xl 2xl:text-4xl text-blue-600 font-akina uppercase font-extrabold"
                >
                    Confira abaixo nossas indicações
                    <span className='text-2xl font-light mt-4 font-redonda'>
                        Escolhas selecionadas com base em qualidade e experiência.
                    </span>
                </motion.h2>

                {loading ?
                    <p className='font-redonda text-xl text-blue-600 my-20'>Carregando...</p>
                    : <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-8'>
                        {indications.map((indicacao, index) => (
                            <div key={index} className='flex flex-col rounded-xl bg-blue-600 overflow-hidden'>
                                <img src={indicacao.imagem} className='w-full h-[300px] object-cover object-center' />
                                <div className='flex flex-col w-full h-full p-8 justify-between'>
                                    <div className='w-full'>
                                        <h3 className='text-2xl text-white font-extrabold font-sans uppercase'>{indicacao.titulo}</h3>
                                        <p className='text-xl text-white font-redonda'>{indicacao.descricao}</p>
                                    </div>
                                    <Link
                                        href={`https://api.whatsapp.com/send?phone=55${indicacao.numero}&text=Ol%C3%A1%2C%20vi%20a%20indica%C3%A7%C3%A3o%20no%20site%20Vai%20Viajar%20Outra%20Vez%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20%F0%9F%98%81`}
                                        target='_blank'
                                        className='flex items-center w-full justify-center  gap-4 px-6 py-2 mt-4 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
                                    >
                                        Entrar em contato
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                <Link href="/"
                    className='flex items-center w-fit justify-center gap-4 px-6 py-2 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
                >
                    Voltar para o Início
                </Link>
            </div>

            <Footer />
        </div >
    )
}