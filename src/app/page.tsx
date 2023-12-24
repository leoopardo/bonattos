/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Card, Carousel, Col, Divider, Row, theme } from "antd";
import Meta from "antd/es/card/Meta";
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
    <div
      style={{
        background: colorBgContainer,
        minHeight: "75vh",
        borderRadius: borderRadiusLG,
      }}
    >
      <Row style={{ width: "100%", height: "100%" }}>
        <Col span={24}>
          <Carousel draggable autoplay>
            <img src="https://twtatixio.vtexassets.com/assets/vtex.file-manager-graphql/images/5b6941fa-2842-4808-bc36-da81e509d66b___23c7da299bd8172ef25383d82013f997.png" />
            <img src="https://twtatixio.vtexassets.com/assets/vtex.file-manager-graphql/images/6456488a-70ee-41d1-8a00-3b302bf21da8___c30c0d92be6bffbe69394b968f317eb0.png" />
            <img src="https://www.lingerie.com.br/lojas/00000159/prod/marca-demillus.jpg" />

            {/* {Brands?.items?.map((brand) => (
                  <div key={brand._id}>
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width="600"
                      height={600}
                    />
                  </div>
                ))} */}
          </Carousel>
        </Col>
        <Col
          span={24}
          style={{
            marginTop: -24,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 24,
          }}
        >
          <Divider orientation="left">
            <h3 style={{ color: "#747474", fontWeight: 400 }}>
              Novos produtos Tupperware
            </h3>
          </Divider>
          <Row gutter={[48, 16]} style={{ width: "100%", display: "flex" }}>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://twtatixio.vtexassets.com/arquivos/ids/159481-800-auto?v=638325464014500000&width=800&height=auto&aspect=true"
                  />
                }
              >
                <Meta
                  title="Eco Tupper"
                  description="Eco Tupper Redonda Plus 500ml Lilás"
                />
              </Card>
            </Col>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://twtatixio.vtexassets.com/arquivos/ids/159482-800-auto?v=638325464363800000&width=800&height=auto&aspect=true"
                  />
                }
              >
                <Meta
                  title="Eco Tupper"
                  description="Eco Tupper Redonda Plus 310ml Laranja"
                />
              </Card>
            </Col>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://twtatixio.vtexassets.com/arquivos/ids/159483-300-300?v=638325464706770000&width=300&height=300&aspect=true"
                  />
                }
              >
                <Meta
                  title="Eco Tupper"
                  description="Eco Tupper Redonda Plus 500ml Azul"
                />
              </Card>
            </Col>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://twtatixio.vtexassets.com/arquivos/ids/159498-300-300?v=638334303096930000&width=300&height=300&aspect=true"
                  />
                }
              >
                <Meta
                  title="Eco Tupper"
                  description="Eco Tupper Redonda Plus 500ml perolada"
                />
              </Card>
            </Col>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://twtatixio.vtexassets.com/arquivos/ids/159553-300-300?v=638354801169630000&width=300&height=300&aspect=true"
                  />
                }
              >
                <Meta
                  title="Tigela"
                  description="Tigela Maravilhosa 500ml Wasabi"
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col
          span={24}
          style={{
            marginTop: -24,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 24,
          }}
        >
          <Divider orientation="left">
            <h3 style={{ color: "#747474", fontWeight: 400 }}>
              Novos produtos O Boticário
            </h3>
          </Divider>
          <Row gutter={[48, 16]}>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B54017/d87f6294-95f3-4494-8e06-88a8e51fb5f7-bot-54017-kit-natal-l-eau-de-lily-colonia-creme-hidratante-maos-acetinado-corporal-frontal-01.jpg"
                  />
                }
              >
                <Meta
                  title="Kit Presente"
                  description="Kit Presente Natal L'eau de Lily (3 itens)"
                />
              </Card>
            </Col>
            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B2023101508/3d2d8fa6-9596-466e-94c1-adcb1872b031-bot-2023101508-quasar-vision-colonia-body-spray.jpg"
                  />
                }
              >
                <Meta
                  title="Eco Tupper"
                  description="Eco Tupper Redonda Plus 310ml Laranja"
                />
              </Card>
            </Col>

            <Col md={{ span: 6 }} xs={{ span: 24 }}>
              <Card
                hoverable
                bordered={false}
                cover={
                  <img
                    alt="garrafinha"
                    src="https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B54037/72f73226-1b16-43ed-896c-179c877bf1a7-bot-54037-kit-natal-nativa-spa-ameixa-creme-hidratante-corporal-sabonete-liquido-creme-maos-frontal-01.jpg"
                  />
                }
              >
                <Meta
                  title="Kit Presente"
                  description="Natal Nativa SPA Ameixa (3 itens)"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
