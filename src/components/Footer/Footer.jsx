'use client'
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className='flex justify-between items-center my-7 md_2:w-[55%] md_2:flex-col md_2:gap-4'>
                <p className='md_1:text-xs'>Luana Beatriz © {currentYear}</p>
                <div className='flex space-x-4'>
                    <Link href="mailto:luanabia_s@live.com" target="_blank" aria-label="Email">
                        <FaMailBulk className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#a3a3a3] w-6 md_2:w-5' size={30} alt="Email" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/luana-beatriz/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#a3a3a3] w-6 md_2:w-5' size={30} alt="LinkedIn" />
                    </Link>
                    <Link href="https://github.com/lubias" target="_blank" aria-label="GitHub">
                        <FaGithub className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#a3a3a3] w-6 md_2:w-5' size={30} alt="GitHub" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Footer;
