"use client";
import { Breadcrumb, Carousel, Col, Layout, Menu, Row, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";
import { useState } from "react";
import { useListBrands } from "../../services/brands/getBrands";
import { useListProducts } from "../../services/products/getProducts";
import { ProductsQuery } from "../../services/products/types/products.interface";

export default function Home() {
  const [query, setQuery] = useState<ProductsQuery>({ limit: 10, page: 1 });
  const { products, productsError, productsLoading, refetchProducts } =
    useListProducts(query);
  const { Brands, BrandsError, BrandsLoading, refetchBrands } =
    useListBrands(query);
  const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  console.log(Brands?.items);

  return (
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
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        />
      </Header>
      <Content style={{ padding: "0 25px" }}>
        <Breadcrumb style={{ margin: "8px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "75vh",
            borderRadius: borderRadiusLG,
          }}
        >
          <Row style={{ width: "100%", height: "100%" }}>
            <Col span={24}>
              <Carousel>
                {Brands?.items?.map((brand) => (
                  <div key={brand._id}>
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width="600"
                      height={600}
                    />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Bonattos ©2023 Created by leoopardo
      </Footer>
    </Layout>
  );
}
