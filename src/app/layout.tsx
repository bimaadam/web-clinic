import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Klinik Setia Medika - Layanan Kesehatan Terpercaya di Panumbangan Ciamis",
    template: "%s | Klinik Setia Medika"
  },
  description: "Klinik Setia Medika adalah penyedia layanan kesehatan terpercaya di Panumbangan, Ciamis, Jawa Barat. Melayani konsultasi dokter, laboratorium, vaksinasi, gawat darurat 24 jam dengan tenaga medis profesional dan fasilitas modern untuk kesehatan keluarga Anda.",
  keywords: [
    "klinik setia medika",
    "klinik panumbangan",
    "klinik ciamis",
    "dokter panumbangan",
    "layanan kesehatan ciamis",
    "rumah sakit panumbangan",
    "konsultasi dokter",
    "laboratorium kesehatan",
    "vaksinasi",
    "gawat darurat",
    "kesehatan keluarga",
    "medical center ciamis",
    "pelayanan medis 24 jam",
    "klinik terpercaya jawa barat"
  ],
  authors: [{ name: "Klinik Setia Medika" }],
  creator: "Klinik Setia Medika",
  publisher: "Klinik Setia Medika",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kliniksetiamedika.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Klinik Setia Medika - Layanan Kesehatan Terpercaya di Panumbangan Ciamis",
    description: "Melayani masyarakat Panumbangan, Ciamis dengan layanan kesehatan berkualitas tinggi. Konsultasi dokter, laboratorium, vaksinasi, dan gawat darurat 24 jam.",
    url: "https://kliniksetiamedika.com",
    siteName: "Klinik Setia Medika",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/back.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik Setia Medika - Fasilitas Modern dan Tenaga Medis Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Setia Medika - Layanan Kesehatan Terpercaya",
    description: "Layanan kesehatan berkualitas di Panumbangan, Ciamis. Konsultasi dokter, lab, vaksinasi, gawat darurat 24 jam.",
    images: ["/back.jpg"],
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
    google: "your-google-verification-code", // Ganti dengan kode verifikasi Google yang sebenarnya
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Structured Data untuk Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Klinik Setia Medika",
              "description": "Klinik kesehatan terpercaya di Panumbangan, Ciamis dengan layanan medis lengkap dan tenaga profesional.",
              "url": "https://kliniksetiamedika.com",
              "telephone": "+62-xxx-xxxx-xxxx", // Ganti dengan nomor telepon yang sebenarnya
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Raya Panumbangan", // Ganti dengan alamat lengkap
                "addressLocality": "Panumbangan",
                "addressRegion": "Ciamis",
                "postalCode": "46268", // Ganti dengan kode pos yang benar
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.3249, // Ganti dengan koordinat yang tepat
                "longitude": 108.3426
              },
              "openingHours": [
                "Mo-Su 08:00-21:00"
              ],
              "priceRange": "$$",
              "image": "https://kliniksetiamedika.com/back.jpg",
              "medicalSpecialty": [
                "General Practice",
                "Laboratory Services",
                "Vaccination",
                "Emergency Medicine",
                "Cardiology",
                "Ophthalmology",
                "Pediatrics",
                "Dentistry"
              ],
              "hasMap": "https://maps.google.com/?q=Panumbangan,Ciamis",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            }),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Panumbangan, Ciamis" />
        <meta name="geo.position" content="-7.3249;108.3426" />
        <meta name="ICBM" content="-7.3249, 108.3426" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#3182CE" />
        <meta name="msapplication-TileColor" content="#3182CE" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}