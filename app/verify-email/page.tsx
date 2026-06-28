"use client";

import { useState } from "react";
import AuthCenteredLayout from "@/components/auth/AuthCenteredLayout";

export default function VerifyEmailPage() {
  const [resent, setResent] = useState(false);

  return (
    <AuthCenteredLayout>
      <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-2xl">
          📧
        </div>
        <h1 className="mt-4 text-xl font-semibold text-gray-900">
          Verify your email
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          We&apos;ve sent a verification link to{" "}
          <span className="font-medium text-gray-700">
            dorathygift0@gmail.com
          </span>
          . Please check your inbox and click the link to verify your account.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Didn&apos;t receive the email?{" "}
          <button
            onClick={() => setResent(true)}
            className="font-medium text-[#042D62] hover:underline"
          >
            Resend
          </button>
        </p>
        {resent && <p className="mt-2 text-xs text-green-600">Email resent!</p>}
      </div>
    </AuthCenteredLayout>
  );
}
