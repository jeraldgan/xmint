import { Providers } from "./providers";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains_mono.variable} font-mono bg-neutral-200 text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
