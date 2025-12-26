export default function Footer() {
    return (
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} HiveForge.dev</p>
          <div className="flex gap-4">
            <a className="hover:text-zinc-800" href="#services">Services</a>
            <a className="hover:text-zinc-800" href="#work">Work</a>
            <a className="hover:text-zinc-800" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  