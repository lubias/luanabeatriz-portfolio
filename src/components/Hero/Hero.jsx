import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='h-96 mt-10 bg-no-repeat bg-[url("../../public/BackgroundHero.svg")] bg-center bg-contain flex flex-col justify-center items-center mb-14'
        >
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='text-center text-6xl sm-0:text-4xl my-10 font-alt'
            >
                Luana Beatriz
            </motion.h1>
            <motion.h4
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='text-center text-xl md_1:text-base mb-14 font-sans'
            >
                Full-stack Developer
            </motion.h4>
            <motion.a
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                href="/portfolio"
                className="overflow-hidden md_1:text-sm md_1:w-44 w-52 p-2 h-15 mb-10 text-[#F2F2F2] text-center hover:text-[#2D2D2D] border-[#F2F2F2] border-2 rounded cursor-pointer relative z-10 group"
            >
                Portfólio
                <span
                    className="absolute w-56 h-48 -top-12 -left-3 bg-[#17171794] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                ></span>
                <span
                    className="absolute w-56 h-48 -top-12 -left-3 bg-[#49444494] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                ></span>
                <span
                    className="absolute w-56 h-48 -top-12 -left-3 bg-[#F2F2F2] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                ></span>
                <span
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                >Ver projetos</span
                >
            </motion.a>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='h-1 w-full bg-[#ffffff6e]'
            ></motion.div>
        </motion.div>
    )
}

export default Hero