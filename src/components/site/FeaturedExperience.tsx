import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Citi Group — Software Engineer",
    problem: "Need for scalable microservices architecture with reliable inter-service communication and improved UI responsiveness.",
    whatIBuilt: [
      "Built scalable backend microservices using Spring Boot with Kafka-based event-driven architecture for inter-service communication",
      "Developed React UI components with optimized state management, improving user interaction performance",
      "Implemented automated API testing suite (unit/integration) with CI/CD pipelines using Docker",
      "Created GraphQL testing utilities to validate API behavior and ensure quality standards",
    ],
    techStack: "Java, Spring Boot, Kafka, React, Docker, CI/CD, GraphQL",
    result: "Improved system reliability and reduced deployment time through automated testing and containerization.",
  },
  {
    title: "KPIT — Software Engineer",
    problem: "Legacy system needed modernization with better data access patterns, async processing, and search capabilities.",
    whatIBuilt: [
      "Implemented DAO layer using Spring ORM + Hibernate (SessionFactory, HQL/SQL) for efficient data access",
      "Designed and implemented RabbitMQ queues with asynchronous JMS workflows to improve system responsiveness",
      "Built Elasticsearch integration with autocomplete and fuzzy search features",
      "Deployed containerized services on AWS EKS with auto-scaling policies for optimal resource utilization",
    ],
    techStack: "Java, Spring, Hibernate, RabbitMQ, JMS, Elasticsearch, AWS EKS",
    result: "Reduced query latency by 40% and improved system responsiveness through async processing and optimized search.",
  },
  {
    title: "Early Career — Full-stack & AI foundations",
    problem: "Building full-stack applications with modern frameworks and exploring AI/ML capabilities for product features.",
    whatIBuilt: [
      "Integrated Angular frontends with Django backends, creating seamless user experiences",
      "Built high-performance REST APIs with FastAPI, handling higher concurrency with async patterns",
      "Developed CNN-based computer vision models using transfer learning and fine-tuning techniques",
    ],
    techStack: "Python, Django, FastAPI, Node.js, Angular, CV/CNN",
    result: "Delivered production-ready full-stack applications and established foundation in AI/ML for product development.",
  },
];

export default function FeaturedExperience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-8 md:py-20">
      <p className="text-sm font-medium text-amber-700">Work Experience</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        Professional Experience
      </h2>
      <p className="mt-3 max-w-3xl text-zinc-700">
        Enterprise and distributed systems experience across backend, full-stack, messaging, and cloud deployments. 
        Each role demonstrates problem-solving, technical implementation, and measurable business impact.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((x) => (
          <Card
            key={x.title}
            className="hf-honey-ring rounded-3xl border-white/60 bg-white/70 backdrop-blur"
          >
            <CardContent className="p-7 md:p-8">
              <h3 className="text-lg font-semibold text-zinc-900">{x.title}</h3>

              {/* Problem */}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Problem</p>
                <p className="mt-1 text-sm text-zinc-700">{x.problem}</p>
              </div>

              {/* What I Built */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What I Built</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {x.whatIBuilt.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-5 rounded-lg border border-amber-100 bg-amber-50/50 p-3">
                <p className="text-xs font-semibold text-amber-800">Tech Stack</p>
                <p className="mt-1 text-xs text-zinc-700">{x.techStack}</p>
              </div>

              {/* Result */}
              <div className="mt-4 rounded-lg border border-green-100 bg-green-50/50 p-3">
                <p className="text-xs font-semibold text-green-800">Result</p>
                <p className="mt-1 text-xs text-zinc-700">{x.result}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
