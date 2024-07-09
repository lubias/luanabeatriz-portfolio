'use client'
import {
    FaUnity,
    FaJs,
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaGithub,
    FaSass,
    FaFigma
} from "react-icons/fa";
import Tooltip from "../Tooltip/Tooltip";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Skils() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
            console.log("Teste");
        }
    }, [isInView]);

    return (
        <div
            ref={containerRef}
        >
            <div>
                <motion.h1
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='text-left text-2xl md_1:text-xl my-10 font-sans'
                >
                    Skills
                </motion.h1>
            </div>
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
                initial="hidden"
                animate={mainControls}
                className="grid grid-cols-5 lg_1:grid-cols-4 lg_3:grid-cols-3 gap-12 mb-16 sm_1:grid-cols-2"

            >
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="Javascript">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaJs size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="HTML 5">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaHtml5 size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="CSS 3">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaCss3 size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="React">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaReact size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="NodeJS">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaNodeJs size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
          
               
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="PHP">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaPhp size={40} color="#F2F2F2" className="w-7"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="Github">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaGithub size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="Unity">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaUnity size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="SASS">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaSass size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Tooltip text="Figma">
                        <div className="bg-[#171717c4] shadow-custom rounded-md px-24 md_3:px-12 md_3:py-6 md_1:px-20 md_2:px-14 py-10 flex flex-col justify-center items-center gap-2 transition duration-1000 delay-0 hover:shadow-skills">
                            <FaFigma size={40} color="#F2F2F2" className="w-6"/>
                        </div>
                    </Tooltip>
                </motion.div>
            </motion.div >
        </div >
    );
}

export default Skils;