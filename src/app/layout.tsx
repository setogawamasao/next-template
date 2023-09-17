// HINT:https://reffect.co.jp/react/next-js-13/#robotstxt
import type { Metadata } from "next";
import { StyledComponentsRegistry } from "@/components/StyledComponentsRegistry";
// CSSは後に書いたほうが強い
import "bulma/css/bulma.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "SAMPLE APP",
    template: "%s | SAMPLE APP",
  },
  description: "This app is sample app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
