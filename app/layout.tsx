import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import Navbar from "./components/Navbar/navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "apnaGharStay",
  description: "SIH 2024 Project | Brown Bandits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <Navbar />
        <div className="pb-20 pt-36">
          {children}
        </div>
        </body>
    </html>
  );
}
