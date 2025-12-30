import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/doctor-bg.jpg')",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          MediBridge AI
        </h1>

        <p className="text-gray-600 mb-8">
          AI-Powered Multilingual Medical Consultation Assistant
        </p>

        <Link href="/consultation">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold mb-4 transition">
            Start Consultation
          </button>
        </Link>

        <Link href="/dashboard">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition">
            Doctor Dashboard
          </button>
        </Link>

        <p className="text-xs text-gray-400 mt-6">
          © 2025 MediBridge AI · Physician-Assisted System
        </p>
      </div>
    </main>
  );
}
