import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mkc Klima",
  description: "Klima ve Otomasyonun Buluşması: İdeal Sıcaklık, Mükemmel Kontrol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Navigation />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
