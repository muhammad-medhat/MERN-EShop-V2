import React, { useEffect, useState } from "react";
// import products from "../../products";
import { ProductCard } from "../com/productCard";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("/api/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     debugger;
    //     setProducts(data);
    //   })
    //   .catch((error) => console.log(error));
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>latest products</h2>
      {JSON.stringify({ products }, null, 3)}
      <Row>
        {products &&
          products.map((p) => (
            <Col xs={12} md={6} lg={4} xl={3}>
              <ProductCard product={p} key={p._id} />
            </Col>
          ))}
      </Row>
    </div>
  );
};
