const groups = [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { title: "Backend", items: ["Node.js", "Spring Boot", "REST APIs", "Microservices"] },
    { title: "AI / Data", items: ["Python", "ML models", "Image processing"] },
    { title: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD"] },
  ];
  
  export default function TechStack() {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Tech stack</h2>
  
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <span key={x} className="rounded-full border px-3 py-1 text-xs text-zinc-700">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  