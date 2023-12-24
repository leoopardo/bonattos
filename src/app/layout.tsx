import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/queryClient";
import Provider from "../../utils/providers";
import { Col, Layout, Menu, Row, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";
import HeaderMenu from "./components/headerMenu";

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
      <body className={inter.className} style={{ padding: 0, margin: 0 }}>
        <Provider>
          <Layout>
            <Header
              style={{
                display: "flex",
                alignItems: "center",
                padding: 0,
                backgroundColor: "#6e3d85",
              }}
            >
              <Image src="/logo.svg" alt="logo" width={220} height={80} />
              <HeaderMenu />
            </Header>
            <Content style={{ padding: "16px" }}>{children}</Content>
            <Footer style={{ backgroundColor: "#6e3d85" }}>
              <Row gutter={[16, 16]}>
                <Col md={{ span: 8 }} xs={{ span: 24 }}>
                  <h1 style={{ color: "#fff" }}>CONTATO</h1>
                  <h4 style={{ color: "#fff" }}>
                    Cascavel - PR - Country - Rua Tiradentes - 2409
                  </h4>
                  <h4 style={{ color: "#fff" }}>
                    +55 (45) 98803-3498 - +55 (45) 98803-3498
                  </h4>
                  <h4 style={{ color: "#fff" }}>
                    <a
                      href="ana.bonatto@gmail.com"
                      style={{ color: "#fff", textDecoration: "underline" }}
                    >
                      ana.bonatto@gmail.com
                    </a>
                  </h4>
                </Col>
              </Row>
            </Footer>
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
