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
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
