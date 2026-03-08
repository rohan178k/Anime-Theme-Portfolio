import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "../app/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { SmoothScroll } from "../components/SmoothScroll";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Rohan Kusmude - Portfolio",
  description: "2nd Year BCA Student | AI Prompt Engineer | Full-Stack Aspirant.",
  icons: {
    icon: "/resources/profile-pic-round.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased overflow-x-hidden w-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
