import React from "react";
import products from "../../products";
import { ProductCard } from "../com/productCard";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../com/Rating";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";
<<<<<<< HEAD
import Loader from "../com/Loader";
import Message from "../com/Message";
=======
>>>>>>> 7f4c919cfe14a1f9995eefca2cca3e256198e307

export const ProductScreen = () => {
  const { id: pId } = useParams();
  const {
    data: product,
    isLoading,
    error: err,
  } = useGetProductDetailsQuery(pId);

  console.log({ product });
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {isLoading ? (
<<<<<<< HEAD
        <h2>
          <Loader />
        </h2>
      ) : err ? (
        <Message variant="danger">{err.data?.message || err.error}</Message>
=======
        <h2>Loading...</h2>
      ) : err ? (
        <h2 className="text-danger">
          {
            //JSON.stringify(err, null, 3)
            //JSON.stringify(Object.entries(err), null, 3)
            err.error
          }
        </h2>
>>>>>>> 7f4c919cfe14a1f9995eefca2cca3e256198e307
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
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock <= 0}
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
