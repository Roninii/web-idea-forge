import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const LeagueSpartanVariable = localFont({
  src: "./LeagueSpartan-VF.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Idea Forge",
  description:
    "Free and open source web development ideas to inspire your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LeagueSpartanVariable.className}>{children}</body>
    </html>
  );
}
