import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import SearchForm from "../components/Search";

const Layout = props => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
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
