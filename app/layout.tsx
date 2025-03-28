import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Themeswitcher from "@/components/Themeswitcher";
import LoadingIndicator from "@/components/LoadingIndicator";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Mahendra Uppari",
  description: "Mahendra Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <LoadingIndicator />

        <Themeswitcher>
          <Header />
          <PageTransition>{children}</PageTransition>
        </Themeswitcher>
      </body>
    </html>
  );
}
