"use client";

import { useEffect, useRef, useState } from "react";

export default function ConsultationPage() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN"; // auto-detect later
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onend = () => {
      if (listening) recognition.start();
    };

    recognitionRef.current = recognition;
  }, [listening]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (!listening) {
      recognitionRef.current.start();
      setListening(true);
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a, #6d28d9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
          Patient Voice Input
        </h2>

        <p style={{ color: "#555", marginBottom: "25px" }}>
          Speak clearly. Your voice is being captured.
        </p>

        {/* MIC BUTTON */}
        <div
          onClick={toggleListening}
          style={{
            margin: "0 auto",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: listening ? "#dc2626" : "#4f46e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            color: "#ffffff",
            cursor: "pointer",
            boxShadow: listening
              ? "0 0 0 20px rgba(220,38,38,0.3)"
              : "0 10px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          🎤
        </div>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            color: listening ? "#dc2626" : "#555",
          }}
        >
          {listening ? "Listening..." : "Tap microphone to start"}
        </p>

        {/* LIVE TRANSCRIPT */}
        <div
          style={{
            marginTop: "25px",
            backgroundColor: "#f3f4f6",
            padding: "12px",
            borderRadius: "10px",
            minHeight: "80px",
            fontSize: "13px",
            color: "#374151",
            textAlign: "left",
          }}
        >
          {transcript || "Your spoken words will appear here..."}
        </div>

        <p
          style={{
            marginTop: "20px",
            fontSize: "12px",
            color: "#777",
          }}
        >
          Voice-only · Secure · Doctor-controlled
        </p>
      </div>
    </div>
  );
}
