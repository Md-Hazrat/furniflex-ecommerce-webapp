"use client";
import LoginForm from "@/components/auth/loginForm";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="overflow-hidden">
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <LoginForm />
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
          <div className="d-flex align-items-center justify-content-center text-white h-100">
            <h1 className="text-center">Your Centered Text Here</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
