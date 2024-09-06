"use client";
import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="container p-4">
      <Navbar>
        <Row className="w-100">
          <Col
            className="d-flex gap-2 align-items-center justify-content-start"
            md={3}
          >
            <Image
              className="cursor-pointer me-2"
              alt="logo"
              src="/images/logo.png"
              width={134}
              height={38}
            />
          </Col>

          <Col className="d-flex justify-content-center gap-4" md={6}>
            <p className="cursor-pointer mb-0">Home</p>
            <p className="cursor-pointer mb-0">Products</p>
            <p className="cursor-pointer mb-0">Categories</p>
            <p className="cursor-pointer mb-0">Custom</p>
            <p className="cursor-pointer mb-0">Blog</p>
          </Col>

          <Col
            className="d-flex justify-content-end gap-4 align-items-center"
            md={3}
          >
            <p className="cursor-pointer mb-0">Cart</p>
            <p className="cursor-pointer mb-0">Login</p>
          </Col>
        </Row>
      </Navbar>
      <div>
        <hr className="my-4" style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default Header;
