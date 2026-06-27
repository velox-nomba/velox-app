const devFeatures = [
  {
    icon: "🔒",
    title: "OAuth Authentication",
    desc: "Secure API access with OAuth 2.0 and scoped API keys.",
  },
  {
    icon: "</>",
    title: "REST APIs",
    desc: "Fully documented REST endpoints with JSON responses and predictable error codes.",
  },
  {
    icon: "🪝",
    title: "Webhook Events",
    desc: "Real-time events for every lifecycle event. Never poll again.",
  },
  {
    icon: "🔐",
    title: "Secure Tokenized Payments",
    desc: "PCI-compliant tokenization built on Nomba infrastructure.",
  },
  {
    icon: "⚡",
    title: "Fast Integration",
    desc: "Go from signup to first subscription in under an hour.",
  },
  {
    icon: "📘",
    title: "Excellent Documentation",
    desc: "Comprehensive guides, API references, and code examples in multiple languages.",
  },
];

export default function DeveloperExperience() {
  return (
    <section className="bg-[#f4f6fb] px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: copy + feature list */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Developer Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Built for developers.
          </h2>
          <p className="mt-4 text-gray-500">
            Velox is API-first with clean, predictable interfaces. No custom
            SDKs to wrestle with — standard REST, standard webhooks, standard
            tokens.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {devFeatures.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white text-sm shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal mockup */}
        <div className="rounded-2xl bg-[#0d1117] p-4 font-mono text-sm shadow-xl sm:p-6">
          <div className="flex items-center gap-2 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-500">~ curl example</span>
          </div>

          <pre className="overflow-x-auto text-xs leading-relaxed text-gray-300 sm:text-sm">
            <code>
              {`$ curl https://api.velox.co/v1/plans \\
  -H "Authorization: Bearer `}
              <span className="text-orange-400">$VELOX_API_KEY</span>
              {`" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Pro Plan"}'`}
            </code>
          </pre>

          <div className="my-4 border-t border-white/10" />

          <pre className="overflow-x-auto text-xs leading-relaxed sm:text-sm">
            <code>
              <span className="text-green-400">HTTP/1.1 201 Created</span>
              {`
{
  "id": "plan_xKp3mNz8qR",
  "name": "Pro Plan",
  "status": `}
              <span className="text-orange-400">"active"</span>
              {`,
  "interval": `}
              <span className="text-orange-400">"monthly"</span>
              {`
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
