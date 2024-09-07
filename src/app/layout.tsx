import type { Metadata } from "next";
import "./globals.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Barlow } from "next/font/google";
import { StoreProvider } from "@/utils/store";
import ToastProvider from "@/utils/toastProvider";

export const metadata: Metadata = {
  title: "FurniFlex E-commerce",
  description:
    "Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.",
};

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <StoreProvider>
          <ToastProvider>
            <div>{children}</div>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
