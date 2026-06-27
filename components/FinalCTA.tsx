const trustSignals = [
  { icon: "○", text: "PCI DSS compliant" },
  { icon: "✓", text: "No setup fees" },
  { icon: "🔔", text: "99.9% uptime SLA" },
  { icon: "📄", text: "Developer-first docs" },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#0a1c4e] px-6 py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Start accepting recurring payments in minutes — built for Africa.
        </h2>
        <p className="mt-4 text-white/70">
          Focus on growing your business while Velox manages billing,
          subscriptions, retries, and payment recovery.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a1c4e] hover:bg-white/90 sm:w-auto">
            Create Free Account →
          </button>
          <button className="w-full rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 sm:w-auto">
            Read Documentation
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
          {trustSignals.map((s) => (
            <span key={s.text} className="flex items-center gap-1.5">
              {s.icon} {s.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
