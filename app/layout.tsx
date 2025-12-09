import type { Metadata, Viewport } from "next"; // Viewport import කරන්න
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Joseph's Girls' School | Nugegoda",
  description: "Official website of St. Joseph's Girls' School, Nugegoda.",
};

// මේ කොටස අලුතෙන් එකතු කරන්න
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // හදිසි Zoom වීම් නවත්වයි
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body>
        {children}
      </body>
    </html>
  );
}