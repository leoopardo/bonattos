/* eslint-disable @next/next/no-img-element */
import { Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function Tupperware() {
  return (
    <Row>
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
  );
}
