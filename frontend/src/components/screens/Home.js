import React from "react";
import products from "../../products";
import { ProductCard } from "../com/productCard";
import { Col, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <h2>latest products</h2>
      <Row>
        {products.map((p) => (
          <Col xs={12} md={6} lg={4} xl={3}>
            <ProductCard product={p} key={p._id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
