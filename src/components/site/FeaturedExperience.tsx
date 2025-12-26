import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Citi Group — Software Engineer",
    bullets: [
      "Built scalable backend microservices using Spring Boot with Kafka-based inter-service communication.",
      "Developed React UI components and improved user interactions with better state management.",
      "Added automated API testing (unit/integration) and improved reliability through CI/CD + Docker.",
      "Worked with GraphQL testing utilities to validate API behavior and quality.",
    ],
    stack: "Java, Spring Boot, Kafka, React, Docker, CI/CD",
  },
  {
    title: "KPIT — Software Engineer",
    bullets: [
      "Implemented DAO layer using Spring ORM + Hibernate (SessionFactory, HQL/SQL).",
      "Improved responsiveness using RabbitMQ queues and asynchronous JMS workflows.",
      "Implemented Elasticsearch search features (autocomplete/fuzzy) and reduced query latency.",
      "Ran containerized services on AWS EKS and improved deployments via scaling policies.",
    ],
    stack: "Java, Spring, Hibernate, RabbitMQ, JMS, Elasticsearch, AWS EKS",
  },
  {
    title: "Early Career — Full-stack & AI foundations",
    bullets: [
      "Integrated Angular frontends with Django backends and improved UI experience.",
      "Built REST APIs with FastAPI and handled higher concurrency with async patterns.",
      "Worked with CNN-based computer vision concepts (transfer learning / fine-tuning).",
    ],
    stack: "Python, Django, FastAPI, Node.js, Angular, CV/CNN",
  },
];

export default function FeaturedExperience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm font-medium text-amber-700">Proof</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        Featured experience
      </h2>
      <p className="mt-3 max-w-3xl text-zinc-700">
        Enterprise and distributed systems experience across backend, full-stack, messaging, and cloud deployments.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((x) => (
          <Card
            key={x.title}
            className="hf-honey-ring rounded-3xl border-white/60 bg-white/70 backdrop-blur"
          >
            <CardContent className="p-7 md:p-8">
              <h3 className="text-base font-semibold">{x.title}</h3>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {x.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-zinc-600">
                <span className="font-medium text-zinc-800">Stack:</span> {x.stack}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
