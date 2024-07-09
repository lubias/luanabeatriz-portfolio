'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Phrase() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-[#17171794] shadow-custom rounded-md md_1:px-8 md_1:text-sm md_2:py-12 px-20 py-20 mb-20'
        >
            <p className='text-center'>
                Programar é como tecer uma tapeçaria digital, onde cada linha de código é um fio que, entrelaçado com precisão, dá vida a uma obra-prima de lógica e inovação.
            </p>
        </motion.div>
    )
}

export default Phrase