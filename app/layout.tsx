import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iqosSans = localFont({
  src: [
    {
      path: "../public/fonts/iqos-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/iqos-sans-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electric Dreams | IQOS Electric Purple",
  description:
    "Start dreaming Electric. Choose your dream, watch it come to life, then compete to win the real experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={iqosSans.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
