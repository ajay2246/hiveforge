import "./globals.css";

export const metadata = {
  title: "HiveForge.dev",
  description:
    "HiveForge builds modern websites, CityHive-style multi-store platforms, and AI-powered products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
