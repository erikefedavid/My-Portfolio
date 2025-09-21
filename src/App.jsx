import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
function App() {

  return (
    <div className='bg-black'>
     <Navbar />
     <Hero />
     <Projects />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
