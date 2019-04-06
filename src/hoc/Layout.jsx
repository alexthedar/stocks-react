import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand target="_blank" href="https://github.com/alexthedar">
            Alexthedar
          </Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/market">Market</Nav.Link>
              </Nav>
              <Form inline>
                <InputGroup>
                  <FormControl
                    placeholder="Stock Symbol"
                    aria-label="Stock Symbol"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Find</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Container>{this.props.children}</Container>
        </main>
      </div>
    );
  }
}

export default Layout;
