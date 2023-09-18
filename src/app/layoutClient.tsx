"use client";
import { StyledComponentsRegistry } from "@/components/styledComponentsRegistry";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MessageBox from "@/components/messageBox";
import Loading from "@/components/loading";

export default function RootLayoutClient({
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
          <MessageBox />
          <Loading />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
