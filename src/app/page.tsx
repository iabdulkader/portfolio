"use client";

import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Layout from "@/components/Layout";
import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <>
        <Cursor />
        <Hero />
        <Layout>
          <About />
          <Skills />
          <Works />
          <Contact />
        </Layout>
        <Footer />
      </>
    </main>
  );
}
