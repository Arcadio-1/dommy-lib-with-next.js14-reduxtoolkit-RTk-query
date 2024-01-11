import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/util/Navbar/Nav";
import Nav_sub from "@/components/util/Navbar/Nav_sub";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy Library",
  description: "List of books that you play with...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        <Nav_sub />
        <main>{children}</main>
      </body>
    </html>
  );
}
