import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  "Python-based model integration",
  "Computer vision foundations (CNN)",
  "Image processing pipelines",
  "Data-driven feature development",
];

export default function AppliedAI() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-20">
      <p className="text-sm font-medium text-amber-700">Applied AI</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        AI features that support real use cases
      </h2>
      <p className="mt-3 max-w-3xl text-zinc-700">
        Practical AI integrations focused on measurable product value — not hype.
      </p>

      <Card className="mt-10 hf-honey-ring rounded-3xl border-white/60 bg-white/70 backdrop-blur">
        <CardContent className="p-7 md:p-8">
          <div className="flex flex-wrap gap-2">
            {items.map((x) => (
              <Badge
                key={x}
                className="rounded-full border border-amber-200 bg-amber-50 text-amber-900"
              >
                {x}
              </Badge>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border bg-white/60 p-4 text-sm text-zinc-700">
            <span className="font-medium">Example:</span> Virtual try-on style workflows (upload → processing →
            inference → UI preview) and AI-assisted product features.
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
