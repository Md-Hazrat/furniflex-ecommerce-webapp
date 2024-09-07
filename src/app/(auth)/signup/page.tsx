"use client";
import Image from "next/image";
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Row, Col, } from "react-bootstrap";
import SignUpForm from "@/components/auth/signup";

const SignUn = () => {
  return (
    <div className="overflow-hidden">
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <SignUpForm />
        </Col>

        <Col
          md={6}
          style={{
            backgroundImage: `url('/images/furniflex.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
              <Image
                src="/images/ficon.png"
                alt="f icon"
                height={85}
                width={89}
              />

              <div className="d-flex flex-column align-items-center justify-content-center">
                <p className="custom-text-style">
                  {" "}
                  Furni
                  <span className="furni-text">Flex</span>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: " #C8C4C4",
                  }}
                >
                  Discover a seamless shopping experience with our curated
                  <br />
                  collection of products. From fashion to electronics, we bring
                  <br />
                  quality.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUn;
