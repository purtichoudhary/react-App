import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './Main.js'
import Header from './Header'
import Footer from './Footer'
import {Container, Row, Col} from "react-bootstrap"
import Newsdata from "./Newsdata"
import './index.css'

function App() {
  return (
    <Container id="appContainer">
        <Row style={{paddingBottom: '20px'}}>
            <Col>
              <Header/>
            </Col>
        </Row>
        <Row>
            <Col sm={8}><div id="main"></div></Col>
            <Col sm={4}><aside><Newsdata/></aside></Col>
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
