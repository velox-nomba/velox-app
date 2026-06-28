import Link from "next/link";

export default function AuthSplitLayout({
  panelContent,
  children,
}: {
  panelContent: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left blue panel — hidden on mobile, shown on lg+ */}
      <div className="hidden flex-col justify-between bg-[#042D62] p-12 lg:flex lg:w-1/2">
        <Link href="/" className="text-xl font-bold text-white">
          𝓥 VELOX
        </Link>
        {panelContent}
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:py-16">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}