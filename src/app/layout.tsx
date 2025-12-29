import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "HiveForge.dev | Full-Stack Engineering & Consulting",
    template: "%s | HiveForge.dev",
  },
  description:
    "Enterprise-grade software engineering. Building scalable platforms, backend systems, and modern web applications with 4+ years of experience in cloud-native microservices, event-driven architecture, and full-stack development.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "microservices",
    "cloud architecture",
    "web development",
    "backend engineering",
    "Java Spring Boot",
    "React",
    "Next.js",
    "Kafka",
    "event-driven architecture",
    "consulting",
  ],
  authors: [{ name: "HiveForge" }],
  creator: "HiveForge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiveforge.dev",
    siteName: "HiveForge.dev",
    title: "HiveForge.dev | Full-Stack Engineering & Consulting",
    description:
      "Enterprise-grade software engineering. Building scalable platforms, backend systems, and modern web applications.",
    images: [
      {
        url: "/og-image.png", // You should add this image
        width: 1200,
        height: 630,
        alt: "HiveForge.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HiveForge.dev | Full-Stack Engineering & Consulting",
    description:
      "Enterprise-grade software engineering. Building scalable platforms, backend systems, and modern web applications.",
    creator: "@hiveforge", // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when you set up Google Search Console, etc.
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "HiveForge",
              url: "https://hiveforge.dev",
              description:
                "Enterprise-grade software engineering services specializing in full-stack development, microservices, and cloud architecture.",
              serviceType: "Software Engineering & Consulting",
              areaServed: "Worldwide",
              provider: {
                "@type": "Person",
                name: "HiveForge",
                email: "ajaykancheti99@gmail.com",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
