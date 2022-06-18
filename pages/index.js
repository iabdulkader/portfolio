import Head from 'next/head';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>iAbdulKader | Home</title>
        <meta name="description" content="Personal Portfoilo of Abdul Kader, a fullstack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
