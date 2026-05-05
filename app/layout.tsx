import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.local"),
  title: {
    default: "Mechatronics Engineering Portfolio",
    template: "%s | Mechatronics Engineering Portfolio",
  },
  description:
    "Industrial, embedded-systems portfolio for a Mechatronics Engineering student based in Kenya.",
  openGraph: {
    title: "Mechatronics Engineering Portfolio",
    description:
      "Embedded systems, robotics, and field-ready automation projects from Kenya.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dark circuit board detail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
