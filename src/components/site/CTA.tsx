import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingDialog from "@/components/site/BookingDialog";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-8 md:hf-section">
      <div className="hf-gborder">
        <Card className="hf-card hf-hover">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="hf-kicker">Let’s talk</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
                  Have an idea? Let’s forge it.
                </h2>
                <p className="mt-3 max-w-2xl text-zinc-700">
                  Tell me what you’re building. I’ll respond with a clear plan, scope, and next steps.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <BookingDialog
                  triggerText="Request Appointment"
                  className="rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-300 text-zinc-900 hover:opacity-95"
                />

                <Button
                  variant="outline"
                  asChild
                  className="rounded-2xl border-zinc-900/10 bg-white/70 hover:bg-white"
                >
                  <a href="mailto:ajaykancheti57@gmail.com">Email Me</a>
                </Button>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                "Fast response (24 hrs)",
                "Clear scope & timeline",
                "Production-ready delivery",
              ].map((t) => (
                <div key={t} className="rounded-2xl border bg-white/60 p-4 text-sm text-zinc-700">
                  {t}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
