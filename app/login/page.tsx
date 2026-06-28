"use client";

import { useState } from "react";
import Link from "next/link";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <AuthSplitLayout
      panelContent={
        <div>
          <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Ride the Future of Payments.
          </div>
          <p className="mt-4 max-w-sm text-white/70">
            Enterprise-ready subscription management for your business. Built
            on Nomba&apos;s secure payment infrastructure — secure, reliable,
            and built for growth.
          </p>
        </div>
      }
    >
      <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
      <p className="mt-1 text-sm text-gray-500">
        Sign in to your Velox account
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          />
          <Link
            href="/forgot-password"
            className="mt-2 inline-block text-sm text-[#042D62]"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#042D62] py-3 text-sm font-medium text-white hover:bg-[#042D62]/90"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-[#042D62]">
          Create account
        </Link>
      </p>
    </AuthSplitLayout>
  );
}