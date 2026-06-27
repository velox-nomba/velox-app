import Image from "next/image";

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
        {/* <div>
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
        </div> */}

        {/* Right: terminal mockup — now an SVG asset */}
        <div className="relative w-full">
          <Image
            src="/images/hero.svg"
            alt="Velox API example: a curl request to create a Pro Plan subscription, returning a 201 Created response"
            width={500}
            height={400}
            className="h-auto w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
