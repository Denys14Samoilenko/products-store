"use client";

import { ReactNode } from "react";
import "./globals.css";
import { Header } from "./components/Header";
import { ToTopBtn } from "./components/ToTopBtn";
import { ReduxPersistor } from "./components/ReduxPersistor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Studiopresto store</title>
      </head>
      <body className={`box-border max-w-[100vw] relative overflow-x-hidden`}>
        <ReduxPersistor>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-auto">{children}</div>
            <Footer></Footer>
            <ToTopBtn />
            <ToastContainer />
          </div>
        </ReduxPersistor>
      </body>
    </html>
  );
}
