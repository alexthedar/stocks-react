import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const getDateFromEpoch = utcSeconds => {
  let d = new Date(utcSeconds);
  return d.toUTCString();
};

export const NewsItem = ({ datetime, headline, source, url, summary }) => {
  return (
    <Card style={{ width: "100%", marginBottom: "1rem" }}>
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
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <small>
              Source: <em>{source}</em>,
            </small>
          </div>
          <div>
            <small>{getDateFromEpoch(datetime)}</small>
          </div>
        </Card.Footer>
      </a>
    </Card>
  );
};

export const NewsList = ({ news, companyName }) => {
  const articles =
    news.length > 0
      ? news.map((newsItem, index) => (
          <NewsItem key={"news" + index} {...newsItem} />
        ))
      : null;
  return (
    <div
      style={{
        marginTop: "1rem",
        backgroundColor: "#DCDCDC",
        padding: ".5rem",
        borderRadius: "5px"
      }}
    >
      {news.length ? (
        <h3>Recent News</h3>
      ) : (
        <h4 style={{ textAlign: "center" }}>
          No Recent News Found For {companyName}
        </h4>
      )}

      {articles}
    </div>
  );
};

export function mapStateToProps(state) {
  const {
    news,
    quotes: { companyName }
  } = state.stockDetail;
  return { news, companyName };
}

export default connect(
  mapStateToProps,
  null
)(NewsList);
