export default function AuthCenteredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Decorative corner shapes — subtle, matches the diagonal stripes in the design */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rotate-45 border-[16px] border-gray-100 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rotate-45 border-[16px] border-gray-100 sm:h-56 sm:w-56" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="mb-8 text-xl font-bold text-[#042D62]">
          𝓥 VELOX
        </div>
        {children}
      </div>
    </div>
  );
}