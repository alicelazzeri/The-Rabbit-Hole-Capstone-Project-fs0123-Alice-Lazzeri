import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BsFillBagHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {["md"].map(expand => (
        <Navbar id="navBar" key={expand} expand={expand} className="px-4 navbar-dark">
          <Container fluid>
            <Navbar.Brand className="navbarBrand" href="#">
              <img id="navbarLogo" src={logo} alt="Brand logo" width={60} height={60} className="rounded-circle" />
              The Rabbit Hole
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="navbarOffcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="closeBtn">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="navbarBrand">
                  The Rabbit Hole
                  <p className="subtitle fw-light">Online bookshop</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4">
                  <Nav.Link className="navLinks">
                    <Link className="navLink" to="/login">
                      Log in
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navLinks">
                    <Link className="navLink" to="/search">
                      Search books
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="navLinks">
                    <Link className="navLink" to="/favourites">
                      Favourites
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="navLink" to="/cart">
                      <BsFillBagHeartFill className="addToCart" />
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
