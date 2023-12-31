import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/assests/directright.svg";
import { GlobalContextProvider } from "@/context/globalContext";
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorSchemeScript />
        <nav className="p-4 m-2">
          <div className="flex items-center text-primary font-bold text-3xl">
            <Image width={50} height={50} src={logo} alt="nav logo"></Image>
            <p>LAMA.</p>
          </div>
        </nav>
        <MantineProvider defaultColorScheme="light">
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
