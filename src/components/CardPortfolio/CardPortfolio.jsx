import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLaptopCode } from 'react-icons/fa'
import { motion } from "framer-motion";

function CardPortfolio({ img, name, description, skills, url_git, url_project }) {
    return (
        <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative flex w-[450px] h-[450px] flex-col rounded-xl bg-[#17171794] bg-clip-border text-[#F2F2F2] shadow-md"
        >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={img} alt="" className='h-full w-full' />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h5>
                <p className="block font-sans text-xs font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
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
                            <FaLaptopCode className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#a3a3a3]' size={25} alt="Project" />
                        </Link>
                        <Link href={url_git} target='_blank'>
                            <FaGithub className='text-[#F2F2F2] transition duration-1000 delay-0 hover:text-[#a3a3a3]' size={25} alt="GitHub" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CardPortfolio;
