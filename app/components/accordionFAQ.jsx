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
          Como faço para pedir meu teste grátis de 7 dias?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          É muito simples! Basta clicar no botão e me chamar direto no WhatsApp. Você me fala que quer testar a comunidade e me envia o seu melhor e-mail. Eu vou te enviar um convite exclusivo para você acessar a plataforma completa por 7 dias. Só isso, sem letras miúdas.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(2)}>
          Qual é o valor do investimento após o teste?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Se você amar a experiência e decidir seguir com a gente, o investimento é de apenas R$ 247 por 6 meses de acesso total. Você pode parcelar em até 6x de R$ 41,16, o que dá menos de R$ 1,40 por dia.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(3)}>
          Preciso cadastrar meu cartão de crédito para testar?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Não! Diferente de outras plataformas, aqui o teste é real: sem pré-pagamento e sem precisar cadastrar cartão. Você entra, usa, fala comigo e, se não quiser assinar depois dos 7 dias, não precisa cancelar nada.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(4)}>
          O que eu ganha acesso nesses 7 dias?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Acesso total! Você entra nos grupos VIPs, acessa todos os e-books e guias (Milhas, Curaçao, Lençóis, Planilhas) E TEM MEU WHATSAPP PARA TIRAR DUVIDAS.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(5)}>
          Não entendo nada de milhas. A comunidade serve para mim?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Com certeza! A comunidade foi feita justamente para quem quer aprender do zero. nós vamos te guiar em cada passo para você começar a emitir suas passagens baratas o quanto antes, sem complicação.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 font-redonda leading-6' onClick={() => handleOpen(6)}>
          Por quanto tempo terei acesso ao conteúdo se eu assinar?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          O acesso é semestral (6 meses). Durante esse tempo, você aproveita todos os guias atuais, os novos lançamentos que fazemos a cada 15 dias e o nosso suporte pessoal direto no WhatsApp.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7}>
        <AccordionHeader className='text-xl lg:text-lg text-white bg-blue-600 py-4 px-4 lg:px-8 rounded-b-xl font-redonda leading-6' onClick={() => handleOpen(7)}>
          Estou com o orçamento apertado. Vale a pena entrar?
        </AccordionHeader>
        <AccordionBody className="bg-white py-4 px-4 lg:px-8 text-blue-600 text-base font-normal">
          Se você quer economizar de verdade, a comunidade é o melhor investimento que você pode fazer. Só o desconto de 40% em Ilhabela e as estratégias de milhas já fazem o valor da assinatura voltar para o seu bolso logo na primeira viagem planejada.
        </AccordionBody>
      </Accordion>

      {/* <Accordion open={open === 8}>
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
      </Accordion> */}
    </div>
  );
}