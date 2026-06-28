"use client";

import { useState } from "react";
import Link from "next/link";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";

const benefits = [
  { title: "Quick Integration", desc: "Get started in under 10 minutes" },
  { title: "Smart Recovery", desc: "Automatic retry for failed payments" },
  { title: "Developer First", desc: "Comprehensive API and webhooks" },
];

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // we'll wire this up to an actual API call later
    console.log(form);
  }

  return (
    <AuthSplitLayout
      panelContent={
        <div>
          <div className="mb-6 h-px w-full bg-white/20" />
          <h2 className="text-2xl font-semibold text-white">
            Start accepting subscriptions in minutes
          </h2>
          <p className="mt-2 text-white/70">
            Join thousands of businesses using Velox for seamless recurring
            payments.
          </p>
          <ul className="mt-6 space-y-4">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{b.title}</p>
                  <p className="text-sm text-white/60">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <h1 className="text-2xl font-semibold text-gray-900">
        Create your account
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Start managing subscriptions today
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter name"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Enter business name"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Business Email
          </label>
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
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#042D62]"
          >
            <option value="">Select Country</option>
            <option value="NG">Nigeria</option>
            <option value="GH">Ghana</option>
            <option value="KE">Kenya</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#042D62] py-3 text-sm font-medium text-white hover:bg-[#042D62]/90"
        >
          Create account
        </button>

        <p className="text-center text-xs text-gray-400">
          By creating an account you automatically agree to Velox&apos;s{" "}
          <Link href="#" className="text-[#042D62] underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[#042D62] underline">
            Privacy Policy
          </Link>
        </p>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#042D62]">
          Sign in
        </Link>
      </p>
    </AuthSplitLayout>
  );
}