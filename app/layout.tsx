import "./globals.css";

export const metadata = {
  title: "MediBridge AI",
  description: "AI-Powered Medical Consultation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background Image */}
        <div className="bg-medical" />

        {/* JPG Particle Animation */}
        <div className="bg-particles" />

        {children}
      </body>
    </html>
  );
}
