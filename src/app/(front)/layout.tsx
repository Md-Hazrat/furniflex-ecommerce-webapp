import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow container mx-auto px-4">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
