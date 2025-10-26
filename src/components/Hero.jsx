import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 dark:from-black/80 dark:via-black/30 dark:to-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Engjaa
          </motion.h1>
          <ThemeToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-3 py-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <Rocket size={16} className="text-indigo-600" /> Tech portfolio • Computer Engineer
          </div>
          <h2 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Engineer Jamil Abo-Abo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Modern websites, smooth interactions, and playful 3D touches. I build sleek experiences with performance and clarity at the core.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
              View Projects
            </a>
            <a href="https://linktr.ee/engjaaa" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 px-5 py-3 text-sm font-semibold hover:bg-white dark:hover:bg-gray-800 transition">
              Socials
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
