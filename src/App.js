import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Calendly from "./components/Calendly";
import Israel from "./components/Israel";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
      <Israel />
      <br />
      <br />
      <Calendly />
      <Footer />
    </main>
  );
}
