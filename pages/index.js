import Head from 'next/head';
import { Toaster } from "react-hot-toast";
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>iAbdulKader | Home</title>
        <meta name="description" content="Personal Portfoilo of Abdul Kader, a fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster />
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
