import { useState } from 'react'
import useLenis from './hooks/useLenis.js'
import Loader from './components/Loader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CaseFiles from './components/CaseFiles.jsx'
import Projects from './components/Projects.jsx'
import Clearance from './components/Clearance.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis({ enabled: loaded })

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <Nav />
      <main className="grid-texture relative">
        <Hero />
        <About />
        <CaseFiles />
        <Projects />
        <Clearance />
        <Contact />
      </main>
    </>
  )
}
