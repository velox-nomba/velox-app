const useCases = [
  {
    icon: "🌐",
    title: "SaaS Platforms",
    desc: "Charge users monthly or annually with plan upgrades and seat management.",
  },
  {
    icon: "🏋️",
    title: "Fitness & Gyms",
    desc: "Automate membership renewals and handle payment failures without chasing members.",
  },
  {
    icon: "🎓",
    title: "Education Platforms",
    desc: "Manage course subscriptions, cohort access, and student billing at scale.",
  },
  {
    icon: "👥",
    title: "Communities",
    desc: "Gate content and collect recurring dues from members seamlessly.",
  },
  {
    icon: "🎥",
    title: "Content Creators",
    desc: "Monetize your audience with tiered memberships and recurring revenue.",
  },
];

export default function BuiltFor() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Built For
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Designed for businesses powered by subscriptions.
        </h2>

        {/* 1 col mobile, 2 col small tablet, 5 col desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="rounded-2xl border border-gray-100 p-6"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-lg">
                {u.icon}
              </div>
              <h3 className="font-medium text-gray-900">{u.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
