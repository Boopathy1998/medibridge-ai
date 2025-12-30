"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-10 max-w-md w-full text-center text-gray-900">
        <h1 className="text-3xl font-bold mb-2">MediBridge AI</h1>

        <p className="text-sm text-gray-600 mb-8">
          AI-Powered Multilingual Medical Consultation Assistant
        </p>

        <div className="space-y-4">
          <Link
            href="/consultation"
            className="block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-semibold transition"
          >
            Start Consultation
          </Link>

          <Link
            href="/dashboard"
            className="block w-full rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 font-semibold transition"
          >
            Doctor Dashboard
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-8">
          © 2025 MediBridge AI · Physician-Assisted System
        </p>
      </div>
    </main>
  );
}
