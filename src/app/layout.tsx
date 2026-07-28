import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agri Field Crop Tech",
  description: "उत्तम पीक, अधिक उत्पादन आणि विश्वासार्ह शेतीसाठी आधुनिक कृषी उत्पादने. Agri Field Crop Tech manufactures high-quality agricultural crop nutrition products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr"
      className={`${poppins.variable} ${notoSansDevanagari.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-devanagari text-slate-800 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
