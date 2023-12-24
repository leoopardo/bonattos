/* eslint-disable @next/next/no-img-element */
import { Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function Tupperware() {
  return (
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
  );
}
