import { Roboto } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"Roboto, monospace"}
      >
        {children}
      </body>
    </html>
  );
}
