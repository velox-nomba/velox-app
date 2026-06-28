import Link from "next/link";
import AuthCenteredLayout from "@/components/auth/AuthCenteredLayout";

export default function ResetLinkSentPage() {
  return (
    <AuthCenteredLayout>
      <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-2xl">
          📧
        </div>
        <h1 className="mt-4 text-xl font-semibold text-gray-900">
          Check your email
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          We sent a password reset link to{" "}
          <span className="font-medium text-gray-700">
            dorathygift0@gmail.com
          </span>
        </p>

        <Link
          href="/login"
          className="mt-4 inline-block text-sm text-[#042D62]"
        >
          Back to login
        </Link>
      </div>
    </AuthCenteredLayout>
  );
}