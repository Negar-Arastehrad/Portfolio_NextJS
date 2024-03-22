import { Cousine } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "./Context/ThemeContext";

const cousine = Cousine({ subsets: ["latin"],
weight: ["400", "700",] });

export const metadata = {
  title: "Negar Arastehrad",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cousine.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
