import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RESISTENCIAS ELECTRICAS",
  description: "Resistencias, sensores y controladores.",
  keywords: ["restaurant", "food", "eat", "dinner", "lunch"],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">
          <Link href="/">Resistencias Eléctricas Madero</Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} RESISTENCIAS ELECTRICAS MADERO
        </footer>
      </body>
    </html>
  );
}
