import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "THE BITTER TRUTH OF SAINT PATRICK'S DAY",
  description: "The celebration that masks a cultural tragedy",
  openGraph: {
    title: "THE BITTER TRUTH OF SAINT PATRICK'S DAY",
    description: "The celebration that masks a cultural tragedy",
    images: [
      {
        url: '/saint_patrick.png',
        width: 1200,
        height: 630,
        alt: 'The Bitter Truth of Saint Patrick\'s Day',
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
