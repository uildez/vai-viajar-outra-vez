'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../containers/navbar'
import Footer from '../containers/footer'

export default function Page() {
    const [cupons, setCupons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbxWMEs7RIZtI8i8Qoj4gbfReMQ9u9yP_vTndwlUGcUc2ZJs7dDxy1bUbdn_3DZQXczfZw/exec")
            .then(response => response.json())
            .then(data => setCupons(data))
            .catch(error => console.error("Erro ao buscar cupons:", error));
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
                    className="flex flex-col mt-16 text-4xl text-center lg:text-3xl 2xl:text-5xl text-blue-600 font-bold font-akina uppercase"
                >
                    Confira abaixo nossos cupons
                    <span className='text-2xl font-light mt-4 font-redonda'>
                        E aproveite os descontos em viagens e muito mais
                    </span>
                </motion.h2>

                {loading ? <p className='font-redonda text-xl text-blue-600 my-20 '>Carregando...</p> :
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-8'>
                        {cupons.map((cupom, index) => (
                            <div key={index} className='flex flex-col rounded-xl bg-blue-600 overflow-hidden'>
                                <img src={cupom.imagem} className='w-full h-[300px] object-cover object-center' />
                                <div className='flex flex-col w-full h-full p-8 justify-between'>
                                    <div className='w-full'>
                                        <h3 className='text-2xl text-white font-extrabold font-sans uppercase'>{cupom.titulo}</h3>
                                        <p className='text-xl text-white font-redonda'>{cupom.descricao}</p>
                                    </div>
                                    <Link href={cupom.link}
                                        className='flex items-center w-full justify-center gap-4 px-6 py-2 mt-4 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
                                    >
                                        Aproveitar cupom
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
        </div>
    )
}