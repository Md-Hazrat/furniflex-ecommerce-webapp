import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <div className="container">
      {children}
      </div>
      <Footer />
    </main>
  );
}
