"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCenteredLayout from "@/components/auth/AuthCenteredLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // later: call API, then navigate on success
    router.push("/reset-link-sent");
  }

  return (
    <AuthCenteredLayout>
      <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">
          Forgot password?
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Enter your email below, and we&apos;ll send you instructions to
          reset it securely.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#042D62] py-3 text-sm font-medium text-white hover:bg-[#042D62]/90"
          >
            Send reset link
          </button>
        </form>

        <Link
          href="/login"
          className="mt-4 block text-center text-sm text-[#042D62]"
        >
          ← Back to login
        </Link>
      </div>
    </AuthCenteredLayout>
  );
}