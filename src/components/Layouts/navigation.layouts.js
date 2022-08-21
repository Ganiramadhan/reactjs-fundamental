import {Navbar, Container, Nav, NavDropdown} from"react-bootstrap"



const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Gani Ramadhan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/albums">ALBUMS</Nav.Link>
              <Nav.Link href="/posts">POST</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation