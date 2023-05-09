import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BsFillBookmarkHeartFill, BsFillSearchHeartFill, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      {["lg"].map(expand => (
        <Navbar id="navBar" key={expand} expand={expand} className="px-4 navbar-dark">
          <Container fluid>
            <Link className="navLink" to="/">
              <Navbar.Brand className="navbarBrand" href="#">
                <img id="navbarLogo" src={logo} alt="Brand logo" width={60} height={60} className="rounded-circle" />
                The Rabbit Hole
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              className="navbarOffcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton className="closeBtn">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="navbarBrand">
                  <Link className="navLink" to="/">
                    <img
                      id="navbarLogo"
                      src={logo}
                      alt="Brand logo"
                      width={60}
                      height={60}
                      className="rounded-circle"
                    />
                  </Link>
                  The Rabbit Hole
                  <p className="subtitle fw-light">Online bookshop</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4">
                  <Nav.Link className="navLinks">
                    <Link className="navLink" to="/login" onClick={() => setShowOffcanvas(false)}>
                      {""}
                      <BsPersonCircle className="me-2" />
                      Log in
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navLinks">
                    <Link className="navLink" to="/search" onClick={() => setShowOffcanvas(false)}>
                      {""}
                      <BsFillSearchHeartFill className="me-2" />
                      Search books
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navLinks">
                    <Link className="navLink" to="/favourites" onClick={() => setShowOffcanvas(false)}>
                      {" "}
                      <BsFillBookmarkHeartFill className="me-2" />
                      Favourites
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
