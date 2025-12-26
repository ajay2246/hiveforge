export default function TrustBar() {
    const items = [
      "4+ years building production systems",
      "Enterprise-grade engineering mindset",
      "Web + Platforms + AI product builds",
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-3 rounded-3xl border bg-zinc-50 p-6 md:grid-cols-3">
          {items.map((x) => (
            <div key={x} className="rounded-2xl border bg-white p-4 text-sm text-zinc-700">
              {x}
            </div>
          ))}
        </div>
      </section>
    );
  }
  