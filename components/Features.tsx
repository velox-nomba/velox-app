const features = [
  {
    icon: "▦",
    title: "Subscription Lifecycle",
    desc: "Create, pause, upgrade, cancel subscriptions with full audit trail.",
  },
  {
    icon: "⚡",
    title: "Smart Automated Charging",
    desc: "Schedule charges, send invoices, and collect payments automatically.",
  },
  {
    icon: "↻",
    title: "Intelligent Payment Recovery",
    desc: "Automatic retries, smart reminders, and reduced churn.",
  },
  {
    icon: "📊",
    title: "Fair Proration Engine",
    desc: "Automatically calculate credits and charges for mid-cycle changes.",
  },
  {
    icon: "👥",
    title: "Customer Billing Portal",
    desc: "Let customers manage plans, update cards, and view invoices.",
  },
  {
    icon: "🔌",
    title: "Clean APIs & Webhooks",
    desc: "Full REST APIs and real-time webhooks — integrate in hours.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white px-6 pb-24 pt-20 sm:pt-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Everything you need to power recurring payments.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          One platform with every tool your team needs to run subscription
          billing at any scale.
        </p>

        {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-lg">
                {f.icon}
              </div>
              <h3 className="font-medium text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
