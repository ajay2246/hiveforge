const steps = [
    { title: "1) Understand the goal", desc: "Business needs, users, and scale expectations." },
    { title: "2) Design the solution", desc: "Architecture + UI/UX planning." },
    { title: "3) Build & iterate", desc: "Clean, maintainable, production-ready code." },
    { title: "4) Launch & support", desc: "Deploy, optimize, and improve." },
  ];
  
  export default function Process() {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How I work</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-3xl border bg-zinc-50 p-6">
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  