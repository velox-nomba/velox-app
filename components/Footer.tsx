export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] px-6 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">𝓥 Velox</span>
        </div>
        <p className="mt-3 max-w-xs text-sm text-white/50">
          Subscription infrastructure built on Nomba for African businesses.
        </p>

        <div className="my-10 border-t border-white/10" />

        <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Velox. All rights reserved.</span>
          <span>Built on Nomba infrastructure · Made for Africa</span>
        </div>
      </div>
    </footer>
  );
}
