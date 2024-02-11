import { Jost } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";
import Script from 'next/script'; 
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
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js" />
        </body>
      </html>
    </ClerkProvider>
  );
}
