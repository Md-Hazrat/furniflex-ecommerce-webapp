import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-5 pb-2">
      <footer className="container">
        <Row>
          <Col md={4}>
            <Image
              src={"/images/footer-logo.png"}
              height={38}
              width={134}
              alt="furniflex logo"
            />
          </Col>
          <Col md={2}>
            <p className="cursor-pointer mb-4 ">About US</p>
            <p className="cursor-pointer mb-2 opacity-75">Master Plan</p>
            <p className="cursor-pointer mb-2 opacity-75">Jobs</p>
            <p className="cursor-pointer mb-2 opacity-75">Invest</p>
            <p className="cursor-pointer mb-2 opacity-75">Pressrom</p>
            <p className="cursor-pointer mb-2 opacity-75">Blog</p>
            <p className="cursor-pointer mb-2 opacity-75">Contact</p>
          </Col>
          <Col md={3}>
            <p className="cursor-pointer mb-4 ">Explore EEVE</p>
            <p className="cursor-pointer mb-2 opacity-75">
              Unlock my Robot Power
            </p>
            <p className="cursor-pointer mb-2 opacity-75">Starlight</p>
            <p className="cursor-pointer mb-2 opacity-75">Robot Platform</p>
            <p className="cursor-pointer mb-2 opacity-75">EEVE Roadmap</p>
          </Col>
          <Col md={3}>
            <p className="cursor-pointer mb-4 ">Community & Support</p>
            <p className="cursor-pointer mb-2 opacity-75">Willow X Community</p>
            <p className="cursor-pointer mb-2 opacity-75">
              Developer & Maker Access
            </p>
            <p className="cursor-pointer mb-2 opacity-75">Special Cases</p>
          </Col>
        </Row>
        <div className="mb-4">
          <hr className="hr-color" />
        </div>
        <Row>
          <Col className="d-flex" md={3}>
            <Image
              className="cursor-pointer me-2"
              alt="fb"
              src="/images/fb.png"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer me-2"
              alt="instagram"
              src="/images/insta.png"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer me-2"
              alt="twitter"
              src="/images/x.png"
              width={20}
              height={20}
            />
            <Image
              className="cursor-pointer"
              alt="linkedin"
              src="/images/linkedin.png"
              width={20}
              height={20}
            />
          </Col>

          <Col className="d-flex justify-content-between" md={5}>
            <p className="cursor-pointer opacity-75">March22 Recap</p>
            <p className="cursor-pointer opacity-75 ">Privacy Policy</p>
            <p className="cursor-pointer opacity-75 ">General Terms</p>
            <p className="cursor-pointer opacity-75 ">Contact</p>
          </Col>

          <Col className="d-flex gap-2 justify-content-end" col={4}>
            <Image
              className="mt-1"
              src={"/images/usa.png"}
              height={18}
              width={18}
              alt="usa flag"
            />
            <p className="opacity-75">United States (English)</p>
          </Col>
        </Row>
        <Row className="text-center">
          <p className="opacity-25">EEVE &copy; 2024. All rights reserved.</p>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
