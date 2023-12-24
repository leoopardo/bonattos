"use client";
import { Button, Card, Col, Row, Space, Table, Tabs, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const index = () => {
  interface DataType {
    key: string;
    Produto: string;
    Marca: string;
    Quantidade: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Produto",
      dataIndex: "Produto",
      key: "Produto",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Marca",
      dataIndex: "Marca",
      key: "Marca",
    },
    {
      title: "Quantidade",
      dataIndex: "Quantidade",
      key: "Quantidade",
    },
    {
      title: "Ação",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>Editar {record.name}</a>
          <a>Deletar</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      Produto: "Pote de plástico",
      Marca: "Tupperware",
      Quantidade: 30,
    },
    {
      key: "2",
      Produto: "Pote de vidro",
      Marca: "Tupperware",
      Quantidade: 30,
    },
    {
      key: "3",
      Produto: "Pote de metal",
      Marca: "Tupperware",
      Quantidade: 30,
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <h1>Bem vinda, Ana.</h1>
      </Col>
      <Col span={24}>
        <Tabs
          items={[
            {
              key: "products",
              label: "Produtos",
              children: (
                <Row style={{ width: "100%" }} gutter={[8, 8]}>
                  <Col md={{ span: 6 }} xs={{ span: 24 }}>
                    <Button>Cadastrar novo produto</Button>
                  </Col>
                  <Col span={24}>
                    <Table columns={columns} dataSource={data} />
                  </Col>
                </Row>
              ),
            },
            { key: "brands", label: "Marcas" },
            { key: "banners", label: "Banners" },
          ]}
        />
      </Col>
    </Row>
  );
};

export default index;
