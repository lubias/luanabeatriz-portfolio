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

    const spiritMovieListDetails = {
        img: "/projects/tumbs/spirit_movie_list.png",
        name: "Spirit Movie List",
        description: "Spirit MovieList é um projeto front-end que oferece uma interface interativa e de fácil navegação. Através da integração com a API <a href='https://www.themoviedb.org/'>TMDB</a>, o site exibe uma lista de filmes com detalhes como avaliação, elenco, sinopse e mais. Este projeto me permitiu aplicar e aprimorar minhas habilidades em desenvolvimento web, com foco em React, consumo de APIs e design responsivo, proporcionando uma experiência dinâmica e informativa para os usuários.",
        skills: [FaReact, SiNextdotjs, RiTailwindCssFill],
        url_git: "https://github.com/lubias/spirit-movielist-front",
        url_project: "https://spirit-movielist.vercel.app/"
    };

    const mecanicaMundialDetails = {
        img: "/projects/tumbs/mecanica_mundial.png",
        name: "Mecânica Mundial",
        description: "Projeto desenvolvido para a empresa Mecânica Mundial, especializada em serviços automotivos em Belo Horizonte. O objetivo foi criar um site moderno, atrativo e intuitivo, com foco na captação de novos clientes e na centralização de oportunidades de contato para profissionais interessados em trabalhar na empresa.",
        skills: [FaReact, SiNextdotjs, RiTailwindCssFill],
        url_git: "https://github.com/Mecanica-Mundial/mecanica-mundial",
        url_project: "https://mecanica-mundial.vercel.app/"
    }

    return (
        <div className='min-h-screen lg_3:h-auto flex flex-col justify-between'>
            <div className="px-56 lg_2:px-12 sm_1:px-4">
                <Header />
                <div className='mb-7'>
                    <motion.h1
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 10, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className='text-left text-2xl sm-0:text-4xl font-sans'
                    >
                        Projetos
                    </motion.h1>
                </div>
                <div className='flex flex-col gap-8 mb-10'>
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
                        <CardPortfolio {...spiritMovieListDetails} />
                        <CardPortfolio {...mecanicaMundialDetails} />
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg_3:relative">
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