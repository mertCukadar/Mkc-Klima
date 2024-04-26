import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mkc Klima",
  description: "Mkc klima otomasyon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Navigation />
        
        {children}
        
        <Header />
      </body>
    </html>
  );
}
