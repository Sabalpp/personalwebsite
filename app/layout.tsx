import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sabal",
  description:
    "Sabal Poudel — Virginia Tech student, builder, hackathon competitor, and aspiring entrepreneur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
