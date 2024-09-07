"use client";
import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <div className="mb-5">
      <Navbar expand="lg" className="py-3 container">
        <Container>
          <Navbar.Brand>
            <Link href={"/"}>
              <Image
                className="cursor-pointer"
                alt="logo"
                src="/images/logo.png"
                width={134}
                height={38}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/" active className="bg-light rounded-3">
                Products
              </Nav.Link>
              <Nav.Link href="#">Categories</Nav.Link>
              <Nav.Link href="#">Custom</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Nav>

            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Item className="position-relative d-inline-block">
                <Link href={"/cart"}>
                  <Image
                    src="/images/cart.png"
                    alt="cart icon"
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                  <div
                    className="position-absolute translate-middle badge rounded-pill bg-black text-white"
                    style={{
                      fontSize: "0.6rem",
                      padding: "0.2em 0.4em",
                      top: "1.4rem",
                      left: "1.2rem",
                    }}
                  >
                    2
                  </div>
                </Link>
              </Nav.Item>

              {true ? (
                <NavDropdown
                  title={
                    <Image
                      src="/images/avatar.png"
                      alt="avatar"
                      height={30}
                      width={30}
                      className="rounded-circle cursor-pointer"
                    />
                  }
                  id="user-dropdown"
                  className="ms-3"
                  align="end" // Aligns the dropdown to the right
                >
                  <NavDropdown.Item onClick={() => console.log("Logout")}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login" className="ms-3">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="m-0 hr-color" />
    </div>
  );
};

export default Header;
