import StyledComponentsRegistry from "@/utils/Registery";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "./globals.scss";
import { Inter } from "next/font/google";
import { PageLayout } from "@/components/PageLayout/";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Itineray",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <PageLayout>{children}</PageLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
