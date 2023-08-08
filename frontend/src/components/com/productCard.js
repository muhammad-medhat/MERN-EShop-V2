import React from "react";
import { Card } from "react-bootstrap";

export const ProductCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body as="div">
        <Card.Title as="h4">
          <a href={`/products/${product._id}`}>
            <strong>{product.name}</strong>
          </a>
        </Card.Title>
        <Card.Text as="span">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
