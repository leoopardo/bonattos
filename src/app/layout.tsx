import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/queryClient";
import Provider from "../../utils/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonattos",
  description: "Revendas de grandes marcas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} style={{padding: 0, margin: 0}}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
