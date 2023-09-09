import { StyledComponentsRegistry } from "@/app/styling/StyledComponentsRegistry";
// CSSは後に書いたほうが強い
import "bulma/css/bulma.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
