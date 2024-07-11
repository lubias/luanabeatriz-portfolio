
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='h-28 py-7 flex justify-between items-center'>
            <Link href="/">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src="/Logo.svg" alt="" width={100}
                    className='w-16'
                />
            </Link>
            <motion.nav
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 1 }}
                className='flex gap-6 md_1:text-sm'
            >
                <Link
                    href="/"
                    className="after:duration-200 duration-200 hover:duration-200 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#baa0ba] relative text-left text-gray-50 overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content['']after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                >
                    Home
                </Link>
                <Link
                    href="/portfolio"
                    className="after:duration-200 duration-200 hover:duration-200 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-[#baa0ba] relative text-left text-gray-50 overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content['']after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                >
                    Portfólio
                </Link>
            </motion.nav>
        </div>
    )
}

export default Header