

import { Jost } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "~/styles/globals.css";
const jost = Jost({ subsets: ["latin"] });

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
    <ClerkProvider publishableKey="pk_test_YmV0dGVyLXRpZ2VyLTc4LmNsZXJrLmFjY291bnRzLmRldiQ">
      <html lang="en">
        <body className={jost.className}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}