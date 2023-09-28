import React, { useEffect } from "react";
import MainSection from "../MainSection/MainSection";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Work from "../Work/Work";
import Aos from "aos";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Test from "../Test/Test";
import Footer from "../Footer/Footer";
export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <MainSection />
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
      <Test />
    </>
  );
}
