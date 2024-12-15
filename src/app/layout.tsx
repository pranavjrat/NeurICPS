import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import TopNav from "./_components/topnav";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "NeurICPS",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/nicps.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="m-0 p-0 bg-gray-50 overflow-x-hidden">
        <TopNav />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}

