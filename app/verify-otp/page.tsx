"use client";

import { useState, useRef } from "react";
import AuthCenteredLayout from "@/components/auth/AuthCenteredLayout";

export default function VerifyOtpPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(index: number, value: string) {
    if (!/^[0-9]?$/.test(value)) return; // only allow a single digit

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // move focus to the next box automatically
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    // move focus back on backspace if the current box is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  return (
    <AuthCenteredLayout>
      <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-2xl">
          📧
        </div>
        <h1 className="mt-4 text-xl font-semibold text-gray-900">
          Confirm Your Identity
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter the 6-digit verification code sent to your email address to
          proceed with signing in securely.
        </p>

        <div className="mt-6 flex justify-center gap-2">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputsRef.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="h-12 w-10 rounded-lg border border-gray-200 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#042D62] sm:h-14 sm:w-12"
            />
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Didn&apos;t receive verification code?{" "}
          <button className="font-medium text-[#042D62] hover:underline">
            Resend code
          </button>
        </p>
      </div>
    </AuthCenteredLayout>
  );
}