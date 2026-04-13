import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</div>;
}
