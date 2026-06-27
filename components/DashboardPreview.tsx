const stats = [
  {
    label: "Active Subscriptions",
    value: "2,841",
    change: "+12.4% vs last month",
    up: true,
  },
  {
    label: "Monthly Revenue",
    value: "₦4.2M",
    change: "+18.2% vs last month",
    up: true,
  },
  {
    label: "Failed Payments",
    value: "34",
    change: "-6.1% vs last month",
    up: false,
  },
  {
    label: "Recovery Rate",
    value: "82%",
    change: "+3.5% vs last month",
    up: true,
  },
];

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto -mt-24 max-w-5xl px-4 sm:-mt-28 sm:px-6">
      <div className="rounded-2xl bg-white p-3 shadow-2xl sm:p-4">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-2 pb-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-gray-400">Velox Dashboard</span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-gray-50 p-3 sm:p-4">
              <p className="text-xs text-gray-500">{stat.label}</p>
              <p className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">
                {stat.value}
              </p>
              <p
                className={`mt-1 text-xs ${
                  stat.up ? "text-green-600" : "text-red-500"
                }`}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Revenue chart placeholder */}
        <div className="mt-3 rounded-xl bg-gray-50 p-3 sm:mt-4 sm:p-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Revenue</span>
            <span>Last 7 months</span>
          </div>
          <div className="mt-3 h-16 w-full sm:h-20">
            <svg
              viewBox="0 0 300 60"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <polyline
                points="0,45 50,40 100,42 150,30 200,32 250,15 300,18"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
