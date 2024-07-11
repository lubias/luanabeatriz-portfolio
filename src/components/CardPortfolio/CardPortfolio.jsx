import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLaptopCode } from 'react-icons/fa'
import { motion } from "framer-motion";

function CardPortfolio({ img, name, description, skills, url_git, url_project }) {
    return (
        <>
            <div
                class="card shadow-[0px_4px_16px_px_#367E08] h-[450px] w-[full] group gap-4 rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden space-y-5"
            >
                <div class="absolute top-0 left-0 h-full w-full bg-[#171717]">
                    <img src={img} alt="" className='group-hover:opacity-15' />
                </div>
                <div
                    class="container text-white z-[2] relative flex flex-col gap-[0.5em]"
                >
                    <div class="h-fit w-full">
                        <h1
                            className="font-weight: 900;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke-width: 1px;"
                            class="card_heading text-xl tracking-[.2em]"
                        >
                            {name}
                        </h1>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            {skills && skills.map((SkillIcon, key) => (
                                <div key={key}>
                                    <SkillIcon size={25} className="text-[#F2F2F2]" />
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Link href={url_project} target='_blank'>
                                <FaLaptopCode className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#baa0ba]' size={25} alt="Project" />
                            </Link>
                            <Link href={url_git} target='_blank'>
                                <FaGithub className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#baa0ba]' size={25} alt="GitHub" />
                            </Link>
                        </div>
                    </div>
                </div>
                <p
                    class="block text-blackfont-light text-sm relative h-[0em] group-hover:h-full leading-[1.2em] duration-500 overflow-hidden"
                >
                    {description}
                </p>
            </div>

        </>
    )
}

export default CardPortfolio;
