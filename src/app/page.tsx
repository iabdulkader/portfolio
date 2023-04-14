"use client";

import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Layout from "@/components/Layout";
import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-bg_primary">
        <div className="max-w-[50%] animate-pulse">
          <Image src={Logo} alt="abdul kader" />
        </div>
      </div>
    );
  }
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
