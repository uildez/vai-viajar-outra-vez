'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../containers/navbar'
import Footer from '../containers/footer'
import { MdModeOfTravel } from "react-icons/md";

export default function Page() {
    const [cupons, setCupons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbzt9T8UKY3BVxdSV_Lq37BQgp4fDY92fLpNFTMT9eBDJ8T0FbfH17N-kG_D3nTZzZjj1Q/exec")
            .then(response => response.json())
            .then(data => setCupons(data))
            .catch(error => console.error("Erro ao buscar cupons:", error));
        setLoading(false)
    }, []);

    const handleCopyAndRedirect = (codigo, link) => {
        navigator.clipboard.writeText(codigo)
            .then(() => {
                setAlert(true);

                setTimeout(() => {
                    setAlert(false);
                }, 5000);

                setTimeout(() => {
                    // window.open(link, "_blank");
                }, 3000);
            })
            .catch((err) => {
                console.error("Erro ao copiar:", err);
            });
    };

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
                                    <button
                                        onClick={() => handleCopyAndRedirect(cupom.codigo, cupom.link)}
                                        className='flex items-center w-full justify-center  gap-4 px-6 py-2 mt-4 bg-yellow-600 text-black rounded-[10px] uppercase font-bold hover:rotate-2 hover:-translate-y-2 transition-transform duration-500'
                                    >
                                        Copiar Cupom e ir para página
                                    </button>
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

            {alert &&
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }} className='fixed flex bottom-4 p-4 gap-8 rounded-xl shadow-2xl right-4 bg-blue-600 text-white font-bold font-akina uppercase'
                >
                    <MdModeOfTravel className='text-5xl' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold font-akina uppercase'>Código copiado</h2>
                        <p className='text-sm font-redonda normal-case'>Você será redirecionado para o site!</p>
                    </div>
                </motion.div>
            }
            <Footer />
        </div>
    )
}