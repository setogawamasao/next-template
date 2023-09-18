// HINT:https://reffect.co.jp/react/next-js-13/#robotstxt
import type { Metadata } from "next";
import { StyledComponentsRegistry } from "@/components/styledComponentsRegistry";
// CSSは後に書いたほうが強い
import "bulma/css/bulma.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MessageBox from "@/components/messageBox";
import Loading from "@/components/loading";
import { ErrorHandlerSetup } from "@/components/ErrorHandlerSetup";

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
  // throw new Error("test");
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
          <ErrorHandlerSetup>
            <MessageBox />
            <Loading />
          </ErrorHandlerSetup>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
