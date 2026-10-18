import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";

function Navebar() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container className="navelist sticky top">
        <Navbar.Brand href="/">Nino</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navelist ">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;
