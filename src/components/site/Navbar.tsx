import BookingDialog from "@/components/site/BookingDialog";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="group inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
            🐝
          </span>
          <span>
            HiveForge<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {[
            ["Services", "#services"],
            ["Experience", "#work"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([t, href]) => (
            <a
              key={t}
              href={href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {t}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="rounded-2xl bg-white/70">
            <a href="mailto:ajaykancheti57@gmail.com">Email</a>
          </Button>

          <BookingDialog
            triggerText="Book a Call"
            className="rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 text-zinc-900 hover:opacity-95"
          />
        </div>
      </div>
    </header>
  );
}
