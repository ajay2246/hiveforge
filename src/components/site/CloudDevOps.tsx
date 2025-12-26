import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  "Docker images",
  "Kubernetes / AWS EKS",
  "CI/CD pipelines (Jenkins, GitHub)",
  "AWS (EC2, S3, SQS, EKS, CloudWatch)",
  "Monitoring (Grafana, Prometheus)",
];

export default function CloudDevOps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm font-medium text-amber-700">Cloud & DevOps</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
        Production-ready delivery
      </h2>
      <p className="mt-3 max-w-3xl text-zinc-700">
        I don’t just build features — I help ship services with automation, deployments, and observability.
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
        </CardContent>
      </Card>
    </section>
  );
}
