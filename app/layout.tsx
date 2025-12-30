import "./globals.css";

export const metadata = {
  title: "MediBridge AI",
  description: "AI Medical Consultation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* BACKGROUND */}
        <div className="bg-medical" />

        {children}
      </body>
    </html>
  );
}
