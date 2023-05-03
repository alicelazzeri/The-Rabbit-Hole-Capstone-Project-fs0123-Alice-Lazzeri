import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BsFillBagHeartFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      {["md"].map(expand => (
        <Navbar id="navBar" key={expand} expand={expand} className="mb-3 px-4 navbar-dark">
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
                  <Nav.Link className="navLinks" href="#action1">
                    Log in
                  </Nav.Link>
                  <Nav.Link className="navLinks" href="#action2">
                    Books
                  </Nav.Link>
                  <Nav.Link className="navLinks" href="#action3">
                    Favourites
                  </Nav.Link>
                  <Nav.Link href="#action4">
                    <BsFillBagHeartFill className="addToCart" />
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
