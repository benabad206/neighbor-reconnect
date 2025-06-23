import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Neighborhood Connect",
  description: "A local community social media platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
