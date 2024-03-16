import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

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
      <body
        className={`${LeagueSpartanVariable.className} grid min-h-screen grid-rows-[1fr_auto]`}
      >
        {children}
        <footer className="flex flex-col items-center justify-center gap-4 p-8 text-lg font-semibold text-zinc-400 md:flex-row md:items-baseline">
          <Link
            href="https://ronini.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-out hover:text-zinc-100 hover:underline"
          >
            Made with 🍺 and 🎵 by <span className="text-gradient">Ronini</span>
          </Link>{" "}
          <span className="hidden md:inline-block">|</span>
          <Link
            href="https://github.com/Roninii/web-idea-forge"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-out hover:text-zinc-100 hover:underline"
          >
            <span className="flex items-baseline gap-1">
              <VscGithub />
              Check out the source
            </span>
          </Link>
        </footer>
      </body>
    </html>
  );
}
