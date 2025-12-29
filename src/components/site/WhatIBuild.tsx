import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const frontend = [
  "React.js & Next.js apps",
  "Component-driven UI architecture",
  "State management + API integration",
  "Performance optimization",
  "Responsive & accessible UI",
];

const backend = [
  "Spring Boot microservices",
  "REST & GraphQL APIs",
  "Kafka / RabbitMQ / JMS",
  "Security (JWT, OAuth2)",
  "DB design + query optimization",
];

function Pill({ text }: { text: string }) {
  return (
    <Badge className="rounded-full border border-amber-200 bg-amber-50 text-amber-900">
      {text}
    </Badge>
  );
}

export default function WhatIBuild() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 hf-section">
      <p className="hf-kicker">What I build</p>
      <h2 className="hf-title">Frontend + Backend engineering that ships</h2>
      <p className="hf-subtitle">
        Clear UI, strong architecture, and production-ready services — built with enterprise discipline.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="hf-gborder">
          <Card className="hf-card hf-hover">
            <CardContent className="p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  🎨
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Frontend Engineering</h3>
                  <p className="text-sm text-zinc-600">
                    Clean, responsive UIs built for scale and maintainability.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {frontend.map((x) => (
                  <Pill key={x} text={x} />
                ))}
              </div>

              <div className="mt-6 rounded-2xl border bg-white/60 p-4 text-sm text-zinc-700">
                <span className="font-medium">Used for:</span> dashboards, admin panels, customer-facing web apps.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="hf-gborder">
          <Card className="hf-card hf-hover">
            <CardContent className="p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Backend Engineering</h3>
                  <p className="text-sm text-zinc-600">
                    Secure, reliable services designed for production workloads.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {backend.map((x) => (
                  <Pill key={x} text={x} />
                ))}
              </div>

              <div className="mt-6 rounded-2xl border bg-white/60 p-4 text-sm text-zinc-700">
                <span className="font-medium">Used for:</span> platforms, integrations, transaction-heavy systems.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
