import "./globals.css";

export const metadata = {
  title: "MediBridge AI",
  description: "AI-Powered Medical Consultation Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
