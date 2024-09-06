"use client";
import Image from "next/image";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  FloatingLabel,
  Form,
} from "react-bootstrap";

const SignUn = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Left side */}
        <Col
          md={6}
          className="bg-white d-flex align-items-center justify-content-center"
        >
          <Card style={{ width: "100%", height: "70%", maxWidth: "500px" }}>
            <Card.Body>
              <div className="text-center mb-4">
                <Card.Title>Welcome To</Card.Title>
                <h1>
                  Furni<span style={{ color: "#28a765" }}>Flex</span>
                </h1>
                <p>Signup to purchase your desired products</p>
              </div>

              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="form-custom"
              >
                <div className="mb-4">
                  <Row className="g-2">
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingInputFirstName"
                        label="First name (optional)"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="First name (optional)"
                        />
                      </FloatingLabel>
                    </Col>

                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingInputLastName"
                        label="Last name (optional)"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Last name (optional)"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                </div>

                <FloatingLabel
                  controlId="floatingInputEmail"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Password is required.
                  </Form.Control.Feedback>
                </FloatingLabel>

                <Form.Group controlId="formCheckbox" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the Terms & Policy"
                    id="rememberMe"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    You must agree before submitting.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  className="bg-black text-white w-100 mb-3"
                  type="submit"
                >
                  Signup
                </Button>
              </Form>

              <div className="text-center mb-3">
                <p className="m-0">or</p>
              </div>

              <Row className="g-2">
                <Col xs={6}>
                  <Button
                    variant="outline-dark"
                    className="d-flex align-items-center w-100"
                  >
                    <i className="bi bi-google me-2"></i> Sign in with Google
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button
                    variant="outline-dark"
                    className="d-flex align-items-center w-100"
                  >
                    <i className="bi bi-github me-2"></i>Sign in with Apple
                  </Button>
                </Col>
              </Row>

              <div className="text-center mt-3">
                <p>
                  Have an account? <Link href="/login">Sign In</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right side */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center bg-light"
        >
          <Image
            src="/images/furniflex.png"
            alt="Furniflex Image"
            height={1024}
            width={688}
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUn;
