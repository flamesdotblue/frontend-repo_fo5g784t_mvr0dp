import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: '3D hero with Spline, motion-first UI, and dark/light theming.',
    tags: ['React', 'Spline', 'Framer'],
    link: '#',
  },
  {
    title: 'SaaS Marketing Site',
    desc: 'Conversion-focused design with animations and content strategy.',
    tags: ['Design', 'SEO', 'Motion'],
    link: '#',
  },
  {
    title: 'E-commerce UI',
    desc: 'Shadcn-inspired components with crisp micro-interactions.',
    tags: ['UI', 'Shadcn', 'Performance'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
      >
        Projects
      </motion.h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            onClick={(e) => p.link === '#' && e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 p-5 hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/30" />
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h4>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200" size={18} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full border border-gray-200 dark:border-gray-800 px-2 py-1 text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/50">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
