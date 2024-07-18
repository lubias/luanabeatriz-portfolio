'use client'
import CardPortfolio from '@/components/CardPortfolio/CardPortfolio'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'
import { FaHtml5, FaCss3, FaReact, FaJs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import React from 'react'
import { motion } from "framer-motion";

function page() {
    const kleytowDetails = {
        img: "/projects/tumbs/kleytow.png",
        name: "Portfólio Kleytow Moreira",
        description: "O projeto em questão, é um portfólio e blog especialmente desenvolvido para um talentoso artista 3D. Além de destacar suas criações impressionantes, o site oferece um CMS personalizado que permite ao artista criar e gerenciar suas próprias postagens, garantindo assim uma plataforma dinâmica e atualizada para compartilhar seu trabalho e insights criativos",
        skills: [FaReact, RiTailwindCssFill, SiTypescript],
        url_git: "https://github.com/DVisioun/cleiton-port-front",
        url_project: "https://kleytowmoreira.art/home"
    };

    const projectDetails2 = {
        img: "/projects/arquitetura.png",
        name: "Tradição em projetos de arquitetura",
        description: "Lading page......",
        skills: [FaHtml5, FaCss3, FaJs],
        url_git: "https://github.com/lubias/desafio-1-resolucao",
        url_project: "https://desafio-1-resolucao.netlify.app/"
    };

    return (
        <div className='h-screen'>
            <div className="px-56 lg_2:px-12 sm_1:px-4">
                <Header />
                <div className='mt-14 mb-10'>
                    <motion.h1
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 10, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className='text-left text-2xl sm-0:text-4xl my-10 font-sans'
                    >
                        Projetos
                    </motion.h1>
                </div>
                <div className='flex flex-col gap-8'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 5,
                                    delay: 0.4
                                }
                            },
                        }}
                        className='grid grid-cols-4 lg_1:grid-cols-3 lg_3:grid-cols-2 md_2:grid-cols-1 gap-6 justify-between'
                    >
                        <CardPortfolio {...kleytowDetails} />
                    </motion.div>
                </div>
            </div>
            <div className='h-[75px]'></div>
            <div className="absolute bottom-0 w-full">
                <hr />
                <div className='px-56 md_2:px-4 md_2:flex md_2:items-center md_2:justify-center'>
                    <Footer />
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    )
}

export default page