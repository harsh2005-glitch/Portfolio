import { Helmet } from 'react-helmet-async'
import HeroCanvas from '../components/Hero/HeroCanvas'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import CPStats from '../components/CPStats/CPStats'
import Experience from '../components/Experience/Experience'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Full Stack MERN Developer</title>
        <meta name="description" content="Full Stack Developer specializing in the MERN stack. Building fast, beautiful, and scalable web applications." />
      </Helmet>
      
      {/* Global Background Canvas */}
      <HeroCanvas />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CPStats />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
