import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Provider from "@/redux/provider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthProvider";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TaskJet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
