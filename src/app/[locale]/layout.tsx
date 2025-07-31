import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReduxProviders from "@/providers/ReduxProviders";
import { Languages } from "@/constants/enums";

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProviders>
        <Header />
        {/* Main content of the page */}
        {children}
        <Footer />
      </ReduxProviders>
    </html>
  );
}
