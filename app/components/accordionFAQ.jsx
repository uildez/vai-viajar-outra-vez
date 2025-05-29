'use client'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function AccordionFAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion open={open === 1}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 rounded-t-xl font-redonda leading-6' onClick={() => handleOpen(1)}>
          Como vou acessar a comunidade depois de me inscrever?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Você recebe um e-mail com o acesso à plataforma e os links dos grupos. Simples, rápido e direto.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(2)}>
          Qual é o valor do investimento para participar da comunidade?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Apenas R$239 por 6 meses de acesso total à comunidade, aos grupos e ao nosso suporte.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(3)}>
          Por quanto tempo terei acesso ao conteúdo?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Você tem acesso completo por 6 meses. Pode aproveitar tudo no seu ritmo, com suporte sempre que precisar.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(4)}>
          Não entendo nada de milhas. Ainda assim posso entrar?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Sim! A comunidade foi feita para quem quer aprender do zero. A gente te guia em cada passo.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(5)}>
          Qual é o propósito da comunidade?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Te mostrar como viajar mais e pagar menos, usando milhas e promoções com estratégia.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(6)}>
          E se eu quiser sair depois?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Você tem 7 dias para pedir reembolso total. Sem burocracia, sem enrolação.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(7)}>
          Qual a minha garantia que isso vai funcionar?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Já ajudamos centenas de pessoas. Mas o resultado depende de aplicar o que ensinamos.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(8)}>
          Estou com o orçamento apertado. Vale a pena entrar?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Se nem os gastos básicos da viagem cabem no seu bolso, é melhor esperar o momento certo.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 rounded-b-xl font-redonda leading-6' onClick={() => handleOpen(9)}>
          Quanto tempo leva para conseguir emitir passagens com milhas?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Com dedicação, é possível emitir em poucas semanas. Nosso suporte acelera o seu processo.
        </AccordionBody>
      </Accordion>
    </div>
  );
}