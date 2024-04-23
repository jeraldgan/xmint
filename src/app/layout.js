import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const mondwest = localFont({
  variable: "--font-mondwest",
  src: [
    {
      path: "./Mondwest-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata = {
  metadataBase: new URL("https://preview.bygideon.com"),
  title: "Gideon - Product Designer",
  description:
    "Hey! I'm Gideon, a product designer from Malaysia with 7 years of experience as a frontend engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains_mono.variable} ${mondwest.variable} font-mono bg-primary-100`}
      >
        {children}
      </body>
    </html>
  );
}
