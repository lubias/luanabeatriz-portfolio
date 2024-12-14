'use client'
import { motion } from 'framer-motion';
import React from 'react'

function About() {
    return (
        <div className='mb-20'>
            <div>
                <motion.h1
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='text-left text-2xl md_1:text-xl sm-0:text-4xl my-10 font-sans'
                >Sobre mim</motion.h1>
            </div>
            <div className='flex gap-12 justify-center items-center md_2:flex-col'>
                <motion.img
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    src="/Luana.jpeg" className='h-52 rounded' alt=""
                />
                <motion.div 
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='flex flex-col gap-2 md_1:text-sm font-light md_2:gap-4 md_2:text-xs text-justify'
                >
                    <p>
                        Olá, eu sou Luana Beatriz, uma profissional apaixonada pelo mundo da tecnologia e desenvolvimento de jogos digitais. Sou graduada em Design de Jogos Digitais, o que me proporciona uma sólida base criativa e técnica. Ao longo da minha carreira, venho me especializando em desenvolvimento web, combinando design intuitivo com programação eficiente.
                    </p>
                    <p>
                        Trabalho como desenvolvedora web full-stack há mais de 3 anos, utilizando tecnologias como HTML, CSS, JavaScript, PHP e React para entregar soluções robustas e inovadoras.
                    </p>
                    <p>
                        Tenho facilidade em aprender novas tecnologias e me adaptar a diferentes contextos e demandas de projetos, valorizo a colaboração e acredito que o trabalho em equipe é fundamental para o sucesso de qualquer projeto.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About