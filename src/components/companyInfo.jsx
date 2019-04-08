import React from "react";
import { connect } from "react-redux";
import { Card, Image, ListGroup, Col } from "react-bootstrap";

const CompanyInfo = ({
  symbol,
  companyName,
  primaryExchange,
  latestPrice,
  latestSource,
  week52High,
  week52Low,
  logo
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h3 style={{ textAlign: "center", paddingBottom: "1rem" }}>
            {symbol}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center"
            }}
          >
            <span style={{ paddingLeft: "1rem" }}>{companyName}</span>
            <Image
              style={{ textAlign: "right", maxHeight: "10rem" }}
              src={logo}
              thumbnail
            />
          </div>
        </Card.Title>
        <ListGroup>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Col style={{ borderRight: "1px solid black" }}>
              <strong>{latestSource}: </strong>
              <span className="text-primary">{latestPrice}</span>
            </Col>

            <Col style={{ borderLeft: "1px solid black", textAlign: "right" }}>
              <strong>Exchange: </strong>
              {primaryExchange}
            </Col>
          </ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Col style={{ borderRight: "1px solid black" }}>
              <strong>Week 52 High: </strong>
              <span className="text-success">{week52High}</span>
            </Col>

            <Col style={{ borderLeft: "1px solid black", textAlign: "right" }}>
              <strong>Week 52 Low: </strong>
              <span className="text-danger">{week52Low}</span>
            </Col>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export function mapStateToProps(state) {
  const {
    quotes: {
      symbol,
      companyName,
      primaryExchange,
      latestPrice,
      latestSource,
      week52High,
      week52Low
    },
    logo,
  } = state.stockDetail;
  return {
    symbol,
    companyName,
    primaryExchange,
    latestPrice,
    latestSource,
    week52High,
    week52Low,
    logo,
  };
}

export default connect(
  mapStateToProps,
  null
)(CompanyInfo);
