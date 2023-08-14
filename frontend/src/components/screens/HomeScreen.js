import React, { useEffect, useState } from "react";
// import products from "../../products";
import { ProductCard } from "../com/productCard";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useGetProductsQuery } from "../../slices/productsApiSlice";

export const HomeScreen = () => {
  const { data: products, isLoading, error: err } = useGetProductsQuery();
  debugger;
  return (
    <div>
      <h2>latest products</h2>
      {/* {JSON.stringify({ products }, null, 3)} */}
      <Row>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2 className="text-danger">{JSON.stringify(err, null, 3)}</h2>
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
