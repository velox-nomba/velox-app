import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} relative overflow-hidden bg-[#042D62] px-4 pb-8 pt-20 m-3 min-h-[calc(100vh-1.5rem)] rounded-2xl flex flex-col sm:px-6 sm:pb-12 sm:pt-32 sm:m-5 sm:min-h-[calc(100vh-2.5rem)] sm:max-h-232.5 sm:rounded-3xl sm:pt-40`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#CCE0FF] px-3 py-1 text-[11px] text-[#042D62] sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs lg:text-sm">
          <span className="flex items-center gap-1.5 text-[11px] font-medium sm:gap-2 sm:text-[12px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <g clipPath="url(#clip0_2049_5716)">
                <path
                  d="M11 6H9.76C9.54148 5.99953 9.32883 6.07065 9.15456 6.20248C8.98029 6.33431 8.854 6.5196 8.795 6.73L7.62 10.91C7.61243 10.936 7.59664 10.9588 7.575 10.975C7.55336 10.9912 7.52705 11 7.5 11C7.47295 11 7.44664 10.9912 7.425 10.975C7.40336 10.9588 7.38757 10.936 7.38 10.91L4.62 1.09C4.61243 1.06404 4.59664 1.04123 4.575 1.025C4.55336 1.00877 4.52705 1 4.5 1C4.47295 1 4.44664 1.00877 4.425 1.025C4.40336 1.04123 4.38757 1.06404 4.38 1.09L3.205 5.27C3.14623 5.47958 3.02069 5.66426 2.84743 5.79601C2.67417 5.92776 2.46266 5.99938 2.245 6H1"
                  stroke="#042D62"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2049_5716">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Built on Nomba
          </span>
          <span className="opacity-50">•</span>
          <span className="text-[11px] font-medium sm:text-[12px]">
            Trusted by Nigerian businesses
          </span>
        </div>

        <h1 className="mx-auto max-w-3xl text-[28px] font-semibold leading-tight text-white sm:text-[40px] md:text-5xl lg:text-[56px]">
          Recurring billing, simplified for Africa.
        </h1>

        <p className="mx-auto mt-4 max-w-211 text-[13px] font-semibold text-white/70 sm:mt-6 sm:text-[14px] sm:text-lg">
          Focus on growing your business while Velox handles subscriptions,
          automated retries, dunning, proration, and payment recovery — all
          powered by Nomba.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
          <button className="w-full rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#0a1c4e] hover:bg-white/90 sm:w-auto flex items-center justify-center gap-1">
            Get Started
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18.5M12.5 18L18.5 12L12.5 6"
                stroke="#042D62"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w-full rounded-lg border border-[#D1D5DB] px-6 py-3 text-sm font-medium text-white hover:bg-white/10 sm:w-auto">
            View Documentation
          </button>
        </div>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-300 px-0 sm:mt-22.25 sm:px-4 lg:px-6">
        <Image
          src="/images/hero.svg"
          alt="Velox dashboard showing active subscriptions, monthly revenue, failed payments, recovery rate, and a 7-month revenue chart"
          width={900}
          height={600}
          className="h-auto w-full rounded-xl "
        />
      </div>
    </section>
  );
}