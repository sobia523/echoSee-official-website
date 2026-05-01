import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "EchoSee Smart Glasses — See What You Cannot Hear",
  description:
    "EchoSee Smart Glasses transform speech into real-time AR subtitles, empowering the hearing-impaired community with AI-powered, multilingual, offline-capable technology.",
  keywords: [
    "EchoSee",
    "smart glasses",
    "hearing impaired",
    "AR subtitles",
    "real-time transcription",
    "accessibility",
  ],
  openGraph: {
    title: "EchoSee Smart Glasses — See What You Cannot Hear",
    description:
      "AI-powered AR glasses that transform speech into live subtitles for the hearing-impaired community.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col w-full antialiased">{children}</body>
    </html>
  );
}
