import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SearchForm from "../components/Search";

const Layout = props => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Market" id="basic-nav-dropdown">
                <NavDropdown.Item href="/market/tops">Tops</NavDropdown.Item>
                <NavDropdown.Item href="/market/last">Lasts</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <SearchForm />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{ paddingTop: "1.5rem" }}>
        <Container>{props.children}</Container>
      </main>
    </div>
  );
};

export default Layout;
