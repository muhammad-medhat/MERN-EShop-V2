import React, { useState } from "react";
import products from "../../products";
import { ProductCard } from "../com/productCard";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useFetcher, useNavigate, useParams } from "react-router-dom";
import Rating from "../com/Rating";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";
import Loader from "../com/Loader";
import Message from "../com/Message";
import { addToCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

export const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const { id: pId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error: err,
  } = useGetProductDetailsQuery(pId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };
  // console.log({ product });

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {isLoading ? (
        <h2>
          <Loader />
        </h2>
      ) : err ? (
        <Message variant="danger">{err.data?.message || err.error}</Message>
      ) : (
        <>
          <h2>{product.name}</h2>
          <Row>
            <Col md={5}>
              <Image src={product.image} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} Reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Status:{" "}
                  {product.countInStock >= 0 ? "In Stock" : "Out Of Stock"}
                </ListGroup.Item>

                {/* Qty Select */}
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock <= 0}
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
