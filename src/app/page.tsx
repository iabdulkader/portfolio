"use client";

import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Layout from "@/components/Layout";
import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <>
          <Cursor />
          <Hero />
          <Layout>
            <About />
            <Skills />
          </Layout>
        </>
      </ParallaxProvider>
    </main>
  );
}
