export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] px-6 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2">
          <svg
            width="84"
            height="28"
            viewBox="0 0 84 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1888 7.12251H32.3549L30.2787 15.2863L28.1482 7.12251H26.2734L29.0784 17.4703H31.4786L34.1888 7.12251Z"
              fill="white"
            />
            <path
              d="M44.4931 17.4703V15.7262H39.1399V12.9558H43.7379V11.2849H39.1399V8.85203H44.1561V7.12251H37.3867V17.4703H44.4931Z"
              fill="white"
            />
            <path
              d="M53.4597 17.4703V15.7116H49.6842V7.12251H47.8906V17.4703H53.4597Z"
              fill="white"
            />
            <path
              d="M56.4766 12.3111C56.4766 15.2131 58.2028 17.7342 61.0077 17.7342C64.4328 17.7342 65.6057 14.583 65.6057 12.2379C65.6057 9.43831 63.9473 6.85867 61.0481 6.85867C58.297 6.85867 56.4766 9.27687 56.4766 12.3111ZM58.3105 12.2379C58.3105 9.96604 59.4704 8.63208 61.0346 8.63208C62.9224 8.63208 63.8122 10.5523 63.8122 12.3989C63.8122 14.7439 62.4773 15.9316 61.0616 15.9316C59.0253 15.9316 58.3105 13.8499 58.3105 12.2379Z"
              fill="white"
            />
            <path
              d="M76.8667 17.4703L73.6435 11.8565L76.3273 7.12251H74.2641L72.6056 10.0831L70.8794 7.12251H68.8297L71.5673 11.8565L68.3711 17.4703H70.4343L72.6056 13.645L74.8304 17.4703H76.8667Z"
              fill="white"
            />
            <mask
              id="mask0_2025_6103"
              maskType="luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="24"
              height="24"
            >
              <path
                d="M0.0976562 2.67723H23.8828V25.077H0.0976562V2.67723Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2025_6103)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.64464 11.5452L5.48945 7.49166V7.48581L2.93894 2.6816H0.0976562L3.35984 8.82416L6.22176 14.2156L7.64464 11.5452ZM18.4955 7.48581L16.3399 11.5452L17.7578 14.2156L20.6198 8.82416L23.8869 2.6816H21.0456L18.4955 7.48581ZM12.6416 7.64384L14.5737 4.00239L15.28 2.6816H18.1213L14.0649 10.32L12.6416 7.64384ZM10.5689 11.5452L9.63919 9.79525L5.86323 2.6816H8.70451L9.21875 3.65269L11.9873 8.86903L13.4102 11.5452L14.8753 14.3005L16.2932 16.9708L13.0571 23.0685L11.9923 25.0726L10.9275 23.0627L7.69176 16.9655L8.34105 15.7403V15.7344L9.10971 14.2893L9.92009 12.7592L11.0728 14.9326L11.343 15.4408L10.5326 16.9708L11.9977 19.7261L13.4623 16.9708L11.9923 14.2215L10.5689 11.5452Z"
                fill="white"
              />
            </g>
          </svg>{" "}
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
