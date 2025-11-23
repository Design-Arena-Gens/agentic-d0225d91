export const metadata = {
  title: "Mithila Makhana | Premium Fox Nuts from Bihar",
  description:
    "Shop premium-grade Mithila Makhana (fox nuts). Handpicked, roasted, and packaged fresh. Healthy, crunchy, and delicious.",
  openGraph: {
    title: "Mithila Makhana | Premium Fox Nuts",
    description:
      "Shop premium-grade Mithila Makhana (fox nuts). Handpicked, roasted, and packaged fresh.",
    url: "https://agentic-d0225d91.vercel.app",
    siteName: "Mithila Makhana",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Makhana in a bowl"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithila Makhana | Premium Fox Nuts",
    description:
      "Shop premium-grade Mithila Makhana (fox nuts). Handpicked, roasted, and packaged fresh.",
  }
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
