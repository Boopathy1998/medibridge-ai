"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="glass-card text-center w-[380px]">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          MediBridge AI
        </h1>

        <p className="text-gray-600 mb-6">
          AI-Powered Multilingual Medical Consultation Assistant
        </p>

        <Link href="/consultation">
          <button className="w-full mb-3 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Start Consultation
          </button>
        </Link>

        <Link href="/dashboard">
          <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Doctor Dashboard
          </button>
        </Link>

        <p className="text-xs text-gray-500 mt-6">
          © 2025 MediBridge AI · Physician-Assisted System
        </p>
      </div>
    </main>
  );
}
