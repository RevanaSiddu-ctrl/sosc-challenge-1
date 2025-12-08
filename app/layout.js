import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";   // I imported renamed Navbar from components
import Footer from "./components/Footer";   // I imported Navbar from components

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SOSC Website",
  description: "Sahyadri Open Source Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />      {/*Navbar at top*/}
        <main>{children}</main>   {/* expanding middle contents */} 
        <Footer />     {/*Footer at Bottom*/}
      </body>
    </html>
  );
}