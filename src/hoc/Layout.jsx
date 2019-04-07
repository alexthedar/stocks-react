import React, { Component } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import { SearchForm } from "../components/Search";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const { loadSymbolQuotes } = this.props;
    loadSymbolQuotes(this.state.searchText);
  }

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
              <Form inline onSubmit={this.handleSubmit}>
                <SearchForm
                  handleChange={this.handleChange}
                  value={this.state.searchText}
                />
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
const mapDispatchToProps = dispatch => {
  return {
    loadSymbolQuotes: symbol => dispatch(actions.getSymbolQuotes(symbol))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Layout);
