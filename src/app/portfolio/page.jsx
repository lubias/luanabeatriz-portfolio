'use client'
import CardPortfolio from '@/components/CardPortfolio/CardPortfolio'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiVite } from "react-icons/si";
import React from 'react'
import { motion } from "framer-motion";

function page() {
    const kleytowDetails = {
        img: "/projects/tumbs/kleytow.png",
        name: "Portfólio Kleytow Moreira",
        description: "O projeto em questão, é um portfólio e blog especialmente desenvolvido para um talentoso artista 3D. Além de destacar suas criações impressionantes, o site oferece um CMS personalizado que permite ao artista criar e gerenciar suas próprias postagens, garantindo assim uma plataforma dinâmica e atualizada para compartilhar seu trabalho e insights criativos",
        skills: [FaReact, SiNextdotjs, RiTailwindCssFill, SiTypescript],
        url_git: "https://github.com/DVisioun/cleiton-port-front",
        url_project: "https://kleytowmoreira.art/home"
    };

    const streamVibeDetails = {
        img: "/projects/tumbs/stream_vibe.png",
        name: "Stream Vibe",
        description: "O que é o StreamVibe? StreamVibe é um projeto front-end que oferece uma interface amigável e intuitiva. Este projeto permitiu-me aplicar e aprimorar as minhas habilidades em desenvolvimento web, particularmente em React e design responsivo.",
        skills: [FaReact, SiNextdotjs, RiTailwindCssFill],
        url_git: "https://github.com/lubias/stream-vibe",
        url_project: "https://streamvibe-three.vercel.app/home"
    };

    const plannerDetails = {
        img: "/projects/tumbs/planner.png",
        name: "Plann.er",
        description: "Plann.er é um projeto front-end de uma aplicação utilizada para organizar viagens e convidar amigos. Desenvolvida com um design moderno e intuitivo. Este projeto foi proposto e desenvolvido na New Level Week da escola rocketseat.",
        skills: [FaReact, SiVite, RiTailwindCssFill],
        url_git: "https://github.com/lubias/planner",
        url_project: "https://planner-lubias-projects.vercel.app/"
    };

    return (
        <div className='h-screen lg_3:h-auto'>
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
                        <CardPortfolio {...streamVibeDetails} />
                        <CardPortfolio {...plannerDetails} />
                    </motion.div>
                </div>
            </div>
            <div className='h-[75px]'></div>
            <div className="absolute bottom-0 w-full lg_3:relative lg_3:bottom-auto">
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