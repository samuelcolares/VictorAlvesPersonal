import "./globals.css";
import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Footer from "@/components/ui/footer";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor Alves Personal",
  description: "Entre agora para o #TEAMALVES!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.png?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={blinker.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
