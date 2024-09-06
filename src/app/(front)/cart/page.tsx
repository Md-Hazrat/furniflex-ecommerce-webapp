import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Row, Col } from "react-bootstrap";
import CartItem from "@/components/cartItem/cartItem";
const CartPage = () => {
  return (
    <div>
      {/*  Right side */}

      <Row>
        <Col md={8}></Col>
        <Col md={4}></Col>
      </Row>

      <div>{/* Left side */}</div>
      <CartItem />
    </div>
  );
};

export default CartPage;
