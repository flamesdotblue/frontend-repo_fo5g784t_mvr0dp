export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-300">
        <div>© {new Date().getFullYear()} Engjaa. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
