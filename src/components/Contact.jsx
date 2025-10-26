import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
      >
        Contact
      </motion.h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="mailto:hello@engjaa.dev" className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5 flex items-center gap-3 hover:shadow-lg transition">
          <Mail /> <span className="text-sm">hello@engjaa.dev</span>
        </a>
        <a href="https://linktr.ee/engjaaa" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5 flex items-center gap-3 hover:shadow-lg transition">
          <Globe /> <span className="text-sm">Socials / Linktree</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5 flex items-center gap-3 hover:shadow-lg transition">
          <Linkedin /> <span className="text-sm">LinkedIn</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5 flex items-center gap-3 hover:shadow-lg transition">
          <Github /> <span className="text-sm">GitHub</span>
        </a>
      </div>
    </section>
  )
}
