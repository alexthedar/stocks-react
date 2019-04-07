import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import * as actions from "../store/actions/index";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(value) {
    this.setState({
      searchText: value.toUpperCase()
    });
  }

  handleSelect(value) {
    this.setState({
      searchText: value.toString()
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setStockSymbol } = this.props;
    setStockSymbol(this.state.searchText);
  }
  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={this.handleSubmit}>
          <InputGroup>
            <Typeahead
              id="stocks"
              labelKey="symbol"
              onChange={this.handleSelect}
              options={this.props.refSymbolTypeAhead}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">
                Get Stock
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStockSymbol: symbol => dispatch(actions.setStockSymbol(symbol))
  };
};

export function mapStateToProps(state) {
  const { refSymbolTypeAhead } = state.search;
  return { refSymbolTypeAhead };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
