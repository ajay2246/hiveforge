import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingDialog from "@/components/site/BookingDialog";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="hf-gborder">
        <Card className="hf-card hf-hover">
          <CardContent className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-sm text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Enterprise-grade engineering • Web • Platforms • AI features
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-6xl">
              <span className="hf-honey-text">Forging</span>{" "}
              scalable platforms, backend systems, and modern web applications.
            </h1>

            <p className="mt-4 max-w-2xl text-base text-zinc-700 md:text-lg">
              I’m a Software Engineer with 4+ years of experience building cloud-native microservices,
              event-driven systems, and full-stack web apps — built for performance, security, and reliability.
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
                { k: "Java + Spring", v: "Microservices & APIs" },
                { k: "Kafka/RabbitMQ", v: "Event-driven architecture" },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border bg-white/60 p-4">
                  <div className="text-lg font-semibold">{x.k}</div>
                  <div className="text-sm text-zinc-600">{x.v}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
