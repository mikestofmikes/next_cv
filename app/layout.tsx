import type { Metadata } from "next";
import Footer from "../src/components/footer"
import Navigation from "../src/components/navigation"
import "./globals.css"



export const metadata: Metadata = {
  title: "Michael Hayes - Senior Fullstack Developer",
  description: "With more than two decades of experience in the digital landscape, I've honed my skills across fullstack development & system architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`monserate h-full antialiased`}
    >
      <body className="">
      <main className="">
        <Navigation />
        {children}
        <Footer />
      </main>
      </body>
    </html>
  );
}
