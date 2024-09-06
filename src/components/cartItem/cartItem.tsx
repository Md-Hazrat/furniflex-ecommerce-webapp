"use client"
import React from "react";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";

const CartItem = () => {
  return (
    <div className="gap-2">
      <Row>
        <Col md={8} className="">
          <div>
            <h3 className="mb-4">An overview of your order</h3>
            <Card className="d-flex">
              <div className="d-flex">
                <div >
                  <Card className="d-flex align-items-center justify-content-between flex-row m-4 ">
                    <p className="mt-3  gap-1">
                      <i className="bi bi-dash"></i>
                    </p>
                    <p className="mt-3 p-1 gap-1">1</p>
                    <p className="mt-3  gap-1">
                      <i className="bi bi-plus-lg"></i>
                    </p>
                  </Card>
                </div>

                <Image
                  src="/images/preview 2.png"
                  alt="Chair image"
                  width={88}
                  height={88} 
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}} 
                />

                <div className="container d-flex justify-content-between m-3">
                  <h6 className="">Recliner Chair Steel</h6>

                  <p>
                    <i className="bi bi-x"></i>
                  </p>
                </div>
              </div>
              <div className="container text-end">
                <h6>€299.00</h6>
              </div>
            </Card>
          </div>
        </Col>

        <Col md={4} className="">
          <h3 className="mb-4">Oder details</h3>
          <Card className="container d-flex justify-content-between mb-4 shadow-sm ">
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>€ 1071.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Estimated Tax</p>
              <p>€ -</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <h5>Total</h5>
              <h5>€ 1071.00</h5>
            </div>
          </Card>
          <Button className="w-100 mb-3 p-2" variant="dark">
            Go to Checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
