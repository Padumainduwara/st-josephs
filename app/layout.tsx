// app/layout.tsx

import type { Metadata } from "next";
// Poppins or Inter import එක අයින් කලා
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Joseph's Girls' School | Nugegoda",
  description: "Official website of St. Joseph's Girls' School, Nugegoda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html> tag එකට 'dark' class එක දැම්මොත් මුළු site එකම dark mode වෙනවා.
    // දැනට අපි OS setting එකට තියමු (හෝ 'dark' දාලා බලන්න)
    <html lang="en"> 
      
      {/* පරණ 'poppins.className' or 'inter.className' එක අයින් කලා.
        දැන් Font එක එන්නෙ globals.css එකෙන්.
      */}
      <body>
        {children}
      </body>
    </html>
  );
}