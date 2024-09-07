"use client";

import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CartItem from "@/components/cartItem/cartItem";
import { Store } from "@/utils/store";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;
  const [subtotal, setSubtotal] = useState(0);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    setSubtotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  return (
    <Row>
      <Col md={8}>
        <CartItem />
      </Col>
      <Col md={4}>
        <h4 className="mb-5">Order Details</h4>
        <Card className="container d-flex justify-content-between mb-4 shadow-sm image-bg">
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>&euro; {subtotal.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Estimated Tax</p>
            <p>&euro; -</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-2">
            <h5>Total</h5>
            <h5>&euro;{subtotal.toFixed(2)}</h5>
          </div>
        </Card>

        <Button className="w-100 mb-3 p-2" variant="dark">
          Go to Checkout
        </Button>
      </Col>
    </Row>
  );
};

export default CartPage;
