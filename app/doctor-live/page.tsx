"use client";

import { useState } from "react";

export default function DoctorLiveView() {
  const [listening, setListening] = useState(true);
  const [notes, setNotes] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "18px",
          padding: "30px",
          width: "100%",
          maxWidth: "700px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontSize: "22px" }}>Doctor Live View</h2>

          <span
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: listening ? "#dc2626" : "#16a34a",
              color: "#ffffff",
            }}
          >
            {listening ? "Patient Speaking" : "Session Paused"}
          </span>
        </div>

        {/* Transcript Area */}
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "15px",
            minHeight: "150px",
            backgroundColor: "#f9fafb",
            marginBottom: "20px",
            fontSize: "14px",
            color: "#374151",
          }}
        >
          {notes || "Live patient speech will appear here..."}
        </div>

        {/* Notes Input */}
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Doctor notes (optional)..."
          style={{
            width: "100%",
            minHeight: "100px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            padding: "12px",
            fontSize: "14px",
            marginBottom: "20px",
            resize: "none",
          }}
        />

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setListening(!listening)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {listening ? "Pause Listening" : "Resume Listening"}
          </button>

          <button
            onClick={() => setNotes("")}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#6b7280",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Clear Notes
          </button>

          <button
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#dc2626",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}
