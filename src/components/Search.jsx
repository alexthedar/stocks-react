import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export const SearchForm = ({ handleChange, value }) => {
  return (
    <React.Fragment>
      <InputGroup>
        <FormControl
          placeholder="Stock Symbol"
          aria-label="Stock Symbol"
          onChange={handleChange}
          value={value}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">
            Get Stock
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </React.Fragment>
  );
};
