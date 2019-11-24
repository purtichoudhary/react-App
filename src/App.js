import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, } from "react-bootstrap";
import Newsdata from "./Newsdata";
import "./index.css";

function App() {
  return (
    <Container id="appContainer" style={{height: '100%'}}>
      <Row style={{ paddingBottom: "15px", height: '10%' }}>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row style={{height: '85%'}}>
        <Col sm={8}>
          <div id="main"></div>
        </Col>
        <Col sm={4}>
          <Newsdata />
        </Col>
      </Row>
      <Row style={{height: '5%'}}>
        <Col sm={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
