import React from "react";
import { connect } from "react-redux";
import { Card, CardDeck } from "react-bootstrap";

const NewsItem = ({ datetime, headline, source, url, summary }) => {
  return (
    <Card>
      <a
        style={{ textDecoration: "none", color: "black" }}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Header>
          <strong style={{ color: "#007bff" }}>{headline}</strong>
        </Card.Header>
        <Card.Body>{summary}</Card.Body>
        <Card.Footer>
          Source: <em>{source}</em>, {datetime.substring(0, 10)}
        </Card.Footer>
      </a>
    </Card>
  );
};

const NewsList = ({ news }) => (
  <CardDeck style={{ marginTop: "1rem" }}>
    {news.map((newsItem, index) => (
      <NewsItem key={"news" + index} {...newsItem} />
    ))}
  </CardDeck>
);

export function mapStateToProps(state) {
  const { news } = state.stockDetail;
  return {news};
}

export default connect(
  mapStateToProps,
  null
)(NewsList);
