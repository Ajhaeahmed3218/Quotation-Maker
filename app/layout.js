import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./services/AuthProvider";
import Sidebar from "./components/Sidebar";
import { getSession } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flight Maker",
  description: "Responsive Sidebar Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {/* Full page wrapper */}
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-50">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
