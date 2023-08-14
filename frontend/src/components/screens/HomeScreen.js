import React, { useEffect, useState } from "react";
// import products from "../../products";
import { ProductCard } from "../com/productCard";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

export const HomeScreen = () => {
  const { data: products, isLoading, error: err } = useGetProductsQuery();
  debugger;
  return (
    <div>
      <h2>latest products</h2>
      <Row>
        {isLoading ? (
          <h2>
            <Loader />
          </h2>
        ) : err ? (
          <Message variant="danger">{err.data?.message || err.error}</Message>
        ) : (
          products &&
          products.map((p) => (
            <Col xs={12} md={6} lg={4} xl={3} key={p._id}>
              <ProductCard product={p} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};
