'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função que monitora a posição do scroll
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Efeito para adicionar e remover o listener de scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Executa apenas na montagem e desmontagem do componente

    // Função para rolar para o topo da página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-5 sm_1:right-4 right-10 z-50 ${isVisible ? 'block' : 'hidden'}`}>
            <button
                onClick={scrollToTop}
                className="bg-[#171717] shadow-custom rounded-md sm_1:px-5 px-6 py-4 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills"
            >
                <FaArrowUp color="#F2F2F2" className="sm_1:w-3"/>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
