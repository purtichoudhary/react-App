import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './Main.js'
import Header from './Header'
import Footer from './Footer'
import {Container, Row, Col} from "react-bootstrap";


function App() {
  return (
    <Container id="appContainer">
        <Row>
            <Col>
              <Header/>
            </Col>
        </Row>
        <Row>
            <Col><Main/></Col>
        </Row>
        <Row>
            <Col>
              <Footer/>
            </Col>
        </Row>
      </Container>
  );
}

export default App;
// style={{maxHeight: '10%'}}
