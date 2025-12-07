import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jet = JetBrains_Mono({
  variable: "--font-jet-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sahyadri Open Source Community",
  description:
    "SOSC — a student-run open-source community at Sahyadri College of Engineering and Management.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jet.variable} antialiased text-slate-900 bg-white`}
      >
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}