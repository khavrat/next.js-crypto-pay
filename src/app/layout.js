import "./globals.css";
import "react-multi-carousel/lib/styles.css"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto payments",
  description: "Crypto payments for telegram bots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
