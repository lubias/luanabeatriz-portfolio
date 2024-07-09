'use client'
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';

function Portfolio() {
    const swiperRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
            console.log("Teste");
        }
    }, [isInView]);

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        const handleMouseEnter = () => {
            swiperInstance.autoplay.stop();
        };

        const handleMouseLeave = () => {
            swiperInstance.autoplay.start();
        };

        const swiperEl = swiperRef.current;

        swiperEl.addEventListener('mouseenter', handleMouseEnter);
        swiperEl.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            swiperEl.removeEventListener('mouseenter', handleMouseEnter);
            swiperEl.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className='mb-40'
        >
            <div>
                <motion.h1
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className='text-left text-2xl sm-0:text-4xl my-10 font-sans'
                >
                    Portfólio
                </motion.h1>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <Swiper
                    ref={swiperRef}
                    effect={'coverflow'}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={'3'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-2/3"
                >
                    <SwiperSlide>
                        <img src="/projects/tumbs/movieListTumb.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/projects/tumbs/arquiteturaTumb.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </motion.div>
            <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 1 }}
                className='flex justify-center mt-14'
            >
                <Link
                    href="/portfolio"
                    className="overflow-hidden w-52 p-2 h-15 mb-10 text-[#F2F2F2] text-center hover:text-[#2D2D2D] border-[#F2F2F2] border-2 rounded cursor-pointer relative z-10 group"
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
                </Link>
            </motion.div>
        </div>
    )
}

export default Portfolio;
