import Image from "next/image";

export default function DashboardPreview() {
  return (
    <div className="relative mx-auto -mt-24 max-w-300 px-4 sm:-mt-52 sm:px-6">
      <Image
        src="/images/hero.svg"
        alt="Velox dashboard showing active subscriptions, monthly revenue, failed payments, recovery rate, and a 7-month revenue chart"
        width={900}
        height={600}
        className="h-auto w-full rounded-2xl shadow-2xl"
      />
    </div>
  );
}