import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "WaterWho",
  description: "Who will you meet?",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
