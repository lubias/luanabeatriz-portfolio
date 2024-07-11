'use client'
import CardPortfolio from '@/components/CardPortfolio/CardPortfolio'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'
import { FaHtml5, FaCss3, FaReact, FaSass, FaJs } from 'react-icons/fa';
import React from 'react'
import { motion } from "framer-motion";

function page() {
    const projectDetails = {
        img: "/projects/movieList.png",
        name: "Movie List",
        description: "Este projeto foi criado para oferecer uma experiência única aos cinéfilos, aproveitando a poderosa API do The Movie Database. Com ele, os usuários podem explorar uma vasta biblioteca de filmes, buscando por seus títulos favoritos e acessando uma riqueza de detalhes sobre cada obra. Desde sinopses envolventes até informações detalhadas sobre o elenco e a equipe de produção, este aplicativo transforma a pesquisa de filmes em uma jornada envolvente e informativa.",
        skills: [FaReact, FaSass],
        url_git: "https://github.com/lubias/lista-de-filmes",
        url_project: "https://lista-de-filmes-1j720xxdp-lubias.vercel.app/"
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
        <>
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
                        <CardPortfolio {...projectDetails} />
                        <CardPortfolio {...projectDetails} />
                        <CardPortfolio {...projectDetails} />
                        <CardPortfolio {...projectDetails} />
                    </motion.div>
                </div>
            </div>
            <div className='h-[75px]'></div>
            <hr />
            <div className="px-56 md_2:px-4 md_2:flex md_2:items-center md_2:justify-center">
                <Footer />
            </div>
            <ScrollToTopButton />
        </>
    )
}

export default page