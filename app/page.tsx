export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "16px",
            width: "100%",
            maxWidth: "480px",
            textAlign: "center",
          }}
        >
          <h1>MediBridge AI</h1>

          <p>AI-Powered Multilingual Medical Consultation Assistant</p>

          <a
            href="/dashboard"
            style={{
              display: "block",
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Doctor Dashboard
          </a>

          <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
            © 2025 MediBridge AI · Physician-Assisted System
          </p>
        </div>
      </div>
    </div>
  );
}
