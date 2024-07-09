import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

function Curriculo() {
    return (
        <div className='flex gap-5 md_2:flex-col md_2:items-center text-center'>
            <div className='bg-[#17171793] w-1/3 md_2:w-full shadow-custom rounded-md md_1:px-4 md_1:py-14 px-10 md_1:text-sm py-20 md_2:mb-0 mb-20 flex items-center'>
                <p className='mb-3'>
                    Caso queira saber mais sobre minhas experiências profissionais, <Link
                        href="/curriculo/CV_Luana_Beatriz_dos_Santos.pdf"
                        target='_blank'
                        className="after:duration-200 duration-200 hover:duration-200 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-400 relative text-left text-gray-50 overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content['']after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                    >
                        baixe aqui o meu currículo resumido
                    </Link>.
                </p>
            </div>
            <div className='bg-[#17171793] w-2/3 md_2:w-full shadow-custom rounded-md md_1:px-4 md_1:py-14 md_1:text-sm px-10 py-20 mb-20 flex items-center'>
                <p>
                    Não exite em entrar em contato, Estou sempre em busca de novos desafios e oportunidades para crescer como profissional.
                    Se você está procurando alguém dedicado, com habilidades diversificadas e uma paixão por tecnologia, <Link
                        href="https://www.linkedin.com/in/luana-beatriz/"
                        target='_blank'
                        className="after:duration-200 duration-200 hover:duration-200 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-400 relative text-left text-gray-50 overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content['']after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                    >
                        vamos nos conectar
                    </Link>!
                </p>
            </div>
        </div>
    )
}

export default Curriculo