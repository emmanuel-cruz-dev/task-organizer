import type { Metadata } from "next";
import { Providers } from "@/providers";
import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Task Organizer",
  description:
    "Task Organizer is a simple task management app that allows you to create, organize, and prioritize tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
