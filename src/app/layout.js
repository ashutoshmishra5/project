import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Productivity School",
  description: "Welcome to Productivity School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
         <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
         <link rel="icon" href="/favicon.ico" />

      </head>
      <body classNameName={inter.classNameName}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
