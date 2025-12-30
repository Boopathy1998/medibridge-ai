import "./globals.css";

export const metadata = {
  title: "MediBridge AI",
  description: "AI-Powered Multilingual Medical Consultation Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background Layers */}
        <div className="medical-bg" />
        <div className="medical-overlay" />
        <div className="medical-dim" />

        {children}
      </body>
    </html>
  );
}
