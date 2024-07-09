'use client'
import About from "@/components/About/About";
import Curriculo from "@/components/Curriculo/Curriculo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Phrase from "@/components/Phrase/Phrase";
import Portfolio from "@/components/Portifolio/Portfolio";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <div  className="px-56 lg_2:px-12 sm_1:px-4">
        <Header />
        <Hero />
        <About />
        <Phrase />
        <Skills />
        <Portfolio />
        <Curriculo />
      </div>
      <hr />
      <div className="px-56 md_2:px-4 md_2:flex md_2:items-center md_2:justify-center">
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
}
