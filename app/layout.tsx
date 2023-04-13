"use client";

import * as React from "react";
import GlobalStyles from "@/styles/globalStyles";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <head />
        <body className="min-h-screen">
            <GlobalStyles />
            {children}
        </body>
      </html>
    </>
  );
}
