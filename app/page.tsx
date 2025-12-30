import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-medical flex items-center justify-center">
      <div className="glass-card max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          MediBridge AI
        </h1>

        <p className="text-gray-600 mb-6">
          AI-Powered Multilingual Medical Consultation Assistant
        </p>

        <div className="space-y-3">
          <Link
            href="/consultation"
            className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Start Consultation
          </Link>

          <Link
            href="/dashboard"
            className="block w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Doctor Dashboard
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © 2025 MediBridge AI · Physician-Assisted System
        </p>
      </div>
    </main>
  );
}
