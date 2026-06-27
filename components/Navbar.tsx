import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white flex items-center justify-center">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.54699 8.86367L5.39179 4.81008V4.80423L2.84128 2.28882e-05H0L3.26218 6.14258L6.1241 11.534L7.54699 8.86367ZM18.3979 4.80423L16.2422 8.86367L17.6602 11.534L20.5221 6.14258L23.7892 2.28882e-05H20.9479L18.3979 4.80423ZM12.5439 4.96226L14.4761 1.32081L15.1824 2.28882e-05H18.0237L13.9672 7.63847L12.5439 4.96226ZM10.4713 8.86367L9.54154 7.11367L5.76558 2.28882e-05H8.60686L9.12109 0.971107L11.8897 6.18745L13.3126 8.86367L14.7776 11.6189L16.1956 14.2893L12.9594 20.3869L11.8946 22.391L10.8298 20.3811L7.5941 14.2839L8.2434 13.0587V13.0528L9.01205 11.6077L9.82244 10.0776L10.9752 12.251L11.2453 12.7592L10.4349 14.2893L11.9 17.0445L13.3646 14.2893L11.8946 11.5399L10.4713 8.86367Z"
                fill="white"
              />
            </svg>
            VELOX
          </span>
        </div>

        {/* Center links */}
        <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="#" className="hover:text-white">
            Home
          </Link>
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="#" className="hover:text-white">
            Documentation
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-white/90 hover:text-white">
            Login
          </Link>
          <Link
            href="#"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0a1c4e] hover:bg-white/90"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
