import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          <div className='hidden w-full px-4 py-1.5 sm:flex justify-end gap-4 text-amber-500'>
            <p>Tel: +1-(770)824-8695</p>
            <p>Fax: +1 855-283-6477</p>
            <p>E-mail: events@whraf.org</p>
          </div>
          <Header />
          <main> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
