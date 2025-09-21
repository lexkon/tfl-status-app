import { Roboto_Condensed, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"]
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "GeneriCorp TfL Line Status",
  description: "GeneriCorp drives innovative, scalable solutions that harness synergy, optimise workflows, and delivers transformative value across dynamic, fast-moving markets across London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${spaceMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
