import "./globals.css";
import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Victor Alves Personal",
  description: "Entre agora para o VATEAM",
  // icons:{
  //   icon:{
  //     './icon.png'
  //   }
  // }
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
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
