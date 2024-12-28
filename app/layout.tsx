import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins,Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
    subsets:['latin'],
    weight:'500',
    variable: '--font-roboto'
})

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nounjo Franck Pagnol",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppinsTini.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
