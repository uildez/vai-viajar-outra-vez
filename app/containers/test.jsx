import React from 'react'

export const Test = () => {
  return (
    <div className={`flex items-center h-[80vh] lg:h-screen w-full px-8 py-12 lg:py-0 lg:px-40 bg-[url('/webp/header-bg.webp')] lg:bg-[url('/webp/header-bg.webp')] bg-cover bg-right`}>
      <h1 className='text-4xl text-yellow-600 font-bold font-[family-name:var(--font-akina)]'>oi viajante,<br />
        seja bem-vindo
      </h1>
      <p>Está buscando o guia completo para conhecer o Brasil e as melhores cidades internacionais pelo melhor preço? <strong>Aqui é o seu lugar!</strong></p>
    </div>
  )
}

