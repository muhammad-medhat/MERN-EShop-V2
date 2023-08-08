import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export const ProductCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body as="div">
        <Card.Title as="h4" className="product-title">
          <Link to={`/products/${product._id}`}>
            <strong>{product.name}</strong>
          </Link>
        </Card.Title>
        <Card.Text as="h3">${product.price}</Card.Text>
        <Card.Text as="span">
          <Rating value={product.rating} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
