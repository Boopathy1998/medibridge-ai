import Link from "next/link";

export default function HomePage() {
  return (
    <main className="card">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        MediBridge AI
      </h1>

      <p className="text-gray-600 mb-6">
        AI-Powered Multilingual Medical Consultation Assistant
      </p>

      <div className="space-y-3">
        <Link href="/consultation" className="block btn-primary">
          Start Consultation
        </Link>

        <Link
          href="/dashboard"
          className="block border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Doctor Dashboard
        </Link>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        © 2025 MediBridge AI · Physician-Assisted System
      </p>
    </main>
  );
}
