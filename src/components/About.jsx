import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">About</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m Engjaa (Engineer Jamil Abo-Abo), a Computer Engineer crafting modern, business-ready digital products. My focus is on delightful interfaces, pragmatic architecture, and polished performance. I combine 3D, motion, and accessible design to create experiences that feel alive.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 bg-white/50 dark:bg-gray-900/40">• Responsive design first</li>
            <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 bg-white/50 dark:bg-gray-900/40">• Motion and micro-interactions</li>
            <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 bg-white/50 dark:bg-gray-900/40">• SEO and performance</li>
            <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 bg-white/50 dark:bg-gray-900/40">• Accessibility-minded</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/30 p-6">
          <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">Highlights</h4>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {[{k:'Projects',v:'24+'},{k:'Years Exp.',v:'5+'},{k:'Clients',v:'18+'},{k:'Stack',v:'Web • 3D • Motion'}].map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-4">
                <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{s.k}</div>
                <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
