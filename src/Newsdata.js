import React, { Component } from "react";

import { ListGroup, Badge, Spinner } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


class Newsdata extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      articles: [],
      refreshTime: 0
    };
  }
  componentDidMount() {
    this.getNews();
    setInterval(this.getNews, 5000);
  }

  getNews = () => {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d1ec5fe61aaf4ed2a8c04811787da869";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data.articles.slice(0, 5),
          loading: false,
          refreshTime: this.state.refreshTime + 1
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <Col sm="12">
              <Row>
                <Col sm="9">
                  <h4>Top 5 Google News Headlies</h4>
                </Col>
                <Col sm="3">
                  <form
                    action="/"
                    style={{ textAlignLast: "right", paddingRight: "20px" }}
                  >
                    <button type="submit" className="btn btn-primary btn-sm">
                      {" "}
                      Home{" "}
                    </button>
                  </form>
                </Col>
              </Row>

              <Badge pill variant="success">
                {" "}
                Refreshed {this.state.refreshTime} Times
              </Badge>
              <Spinner animation="grow" />
              <ListGroup style={{ height: "20px", fontSize: "15px" }}>
                {this.state.articles.map(articles => (
                  <ListGroup.Item key={articles.url}>
                    <a href={articles.url} target="_blank" rel="noopener noreferrer">
                      {articles.title}
                    </a>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </div>
        )}
      </div>
    );
  }
}
export default Newsdata;
