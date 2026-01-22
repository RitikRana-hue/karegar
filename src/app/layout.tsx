import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://karigar-portfolio.vercel.app'),
  title: {
    default: "Ritik - Creative Developer & Designer",
    template: "%s | Ritik - Creative Developer & Designer"
  },
  description: "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies",
  keywords: ["developer", "designer", "portfolio", "react", "nextjs", "typescript", "creative", "web development", "karigar", "ritik rana", "frontend developer", "ui ux designer"],
  authors: [{ name: "Ritik (Karigar)", url: "https://karigar-portfolio.vercel.app" }],
  creator: "Ritik (Karigar)",
  publisher: "Ritik (Karigar)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/klogo.png',
    shortcut: '/klogo.png',
    apple: '/klogo.png',
  },
  openGraph: {
    title: "Ritik - Creative Developer & Designer",
    description: "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences",
    type: "website",
    locale: "en_US",
    url: "https://karigar-portfolio.vercel.app",
    siteName: "Ritik Portfolio",
    images: [
      {
        url: '/heroimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Ritik - Creative Developer & Designer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik - Creative Developer & Designer",
    description: "Creative Developer & Designer crafting exceptional digital experiences",
    images: ['/heroimage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ritik Rana",
    "alternateName": "Karigar",
    "jobTitle": "Creative Developer & Designer",
    "description": "Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies",
    "url": "https://karigar-portfolio.vercel.app",
    "image": "https://karigar-portfolio.vercel.app/heroimage.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/ritik-rana-28101982r",
      "https://github.com/RitikRana-hue"
    ],
    "knowsAbout": [
      "Web Development",
      "UI/UX Design",
      "React",
      "Next.js",
      "TypeScript",
      "Creative Design"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
