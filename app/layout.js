import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body",
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeGlitchGaming | Glitch The Ordinary",
  description:
    "CodeGlitchGaming landing page featuring drops, live arena updates, and community challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
