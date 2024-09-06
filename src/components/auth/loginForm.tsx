import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  FloatingLabel,
  Form,
} from "react-bootstrap";

const LoginForm = () => {
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
    <div className="d-flex justify-content-center">
      <Card className="image-bg border-0">
        <Card.Body>
          <div className=" mb-4">
            <h2>Welcome Back!</h2>
            <p className="text-gray">
              Enter your Credentials to access your account
            </p>
          </div>

          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="form-custom"
          >
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Enter your email"
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
              label="Enter your password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required.
              </Form.Control.Feedback>
            </FloatingLabel>

            <Link href={"/login"} className="d-block text-end text-primary">
              Forgot Password
            </Link>

            <Form.Group controlId="formCheckbox" className="my-3">
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
              className="bg-black text-white w-100 mb-3 py-2 "
              type="submit"
            >
              Signin
            </Button>
          </Form>

          <div className="text-center mb-3">
            <p className="m-0">or</p>
          </div>

          <Row className="g-2">
            <Col xs={6}>
              <Button
                variant="outline-dark"
                className="d-flex align-items-center w-100 text-nowrap"
              >
                <Image
                  alt="google icon"
                  src={"/images/google.png"}
                  width={20}
                  height={20}
                  className="me-2"
                />{" "}
                Sign in with Google
              </Button>
            </Col>
            <Col xs={6}>
              <Button
                variant="outline-dark"
                className="d-flex align-items-center w-100"
              >
                <Image
                  alt="apple icon"
                  src={"/images/apple.png"}
                  width={20}
                  height={20}
                  className="me-2"
                />
                Sign in with Apple
              </Button>
            </Col>
          </Row>

          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link href="/signup">Sign Up</Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
