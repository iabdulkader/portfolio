import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Layout from "@/components/Layout";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Hero />
      <Layout>
        <About />
        {/* <About /> */}
      </Layout>
    </main>
  );
}
