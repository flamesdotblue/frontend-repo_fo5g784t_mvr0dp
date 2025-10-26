import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Onboarding from './components/Onboarding'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100">
      <Hero />

      <main>
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Onboarding />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
