import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tommy = localFont({
  src: [
    {
      path: '../../public/fonts/made_tommy/MADE TOMMY Regular_PERSONAL USE.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/made_tommy/MADE TOMMY Medium_PERSONAL USE.otf',
      weight: '700'
    },
  ],
  variable: '--font-tommy'
})

export const metadata = {
  title: "Claire Lu",
  description: "Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${tommy.variable} font-tommy`}>
      <body className="font-tommy">
        <Navbar/>
        <div className="mt-24">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
