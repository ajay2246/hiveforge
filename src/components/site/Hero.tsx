import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingDialog from "@/components/site/BookingDialog";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-24 md:pb-12">
      <div className="hf-gborder">
        <Card className="hf-card hf-hover">
          <CardContent className="p-6 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-sm text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Enterprise-grade engineering • Web • Platforms • AI features
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-6xl">
              <span className="hf-honey-text">Forging</span>{" "}
              scalable platforms, backend systems, and modern web applications.
            </h1>

            <p className="mt-4 max-w-2xl text-base text-zinc-700 md:text-lg leading-relaxed">
              I'm a Software Engineer with 4+ years of experience building cloud-native microservices,
              event-driven systems, and full-stack web applications. Specializing in enterprise-grade solutions
              that prioritize performance, security, and scalability.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookingDialog
                triggerText="Book a Free 15-Min Call"
                className="rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 text-zinc-900 hover:opacity-95"
              />
              <Button variant="outline" asChild className="rounded-2xl bg-white/70">
                <a href="#work">View Experience</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                { k: "4+ years", v: "Production systems" },
                { k: "Spring Boot & Microservices", v: "Enterprise backend systems" },
                { k: "Kafka/RabbitMQ", v: "Event-driven architecture" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border bg-white/60 p-4">
                  <div className="text-lg font-semibold">{x.k}</div>
                  <div className="text-sm text-zinc-600">{x.v}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4">
              <span className="text-sm text-zinc-600">Connect:</span>
              <a
                href="https://www.linkedin.com/in/ajay-kancheti-57a9b228b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-white hover:text-amber-600 md:px-4 md:py-2"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/ajay2246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-white hover:text-amber-600 md:px-4 md:py-2"
                aria-label="GitHub Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.162-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
