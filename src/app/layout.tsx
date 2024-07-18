'use client';
import { Inter } from "next/font/google";
import {AiffordableRootLayout} from "@aiffordable/design-system";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AiffordableRootLayout>
          {children}
        </AiffordableRootLayout>
      </body>
    </html>
  );
}
