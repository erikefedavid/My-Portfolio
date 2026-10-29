import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { StarfieldBackground } from './Components/StarfieldBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      <StarfieldBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

