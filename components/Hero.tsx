export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1c4e] px-6 pb-32 pt-32 sm:pb-40 sm:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/80 sm:text-sm">
          <span>⚡ Built on Nomba</span>
          <span className="opacity-50">•</span>
          <span>Trusted by Nigerian businesses</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Recurring billing, simplified for Africa.
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          Focus on growing your business while Velox handles subscriptions,
          automated retries, dunning, proration, and payment recovery — all
          powered by Nomba.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a1c4e] hover:bg-white/90 sm:w-auto">
            Get Started →
          </button>
          <button className="w-full rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 sm:w-auto">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
