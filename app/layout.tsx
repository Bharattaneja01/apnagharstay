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
  title: "AirBNB",
  description: "AirBNB clone",
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
        {children}
        </body>
    </html>
  );
}
