import React, { Component } from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";

class Machinelearning extends Component {
  render() {
    return (
      <div>
      <Row>
          <Col style={{paddingBottom: '20px'}} sm={5}><h2>Machine Learning</h2></Col>
          <Col><Link to='/'><Button variant="primary">Home</Button></Link></Col>
        </Row>
        {/* <h2>Machine Learning</h2> */}
        <img src={require('./images/blog3.jpg')} style={{maxWidth: '300px', maxHeight: '400px', paddingBottom: '20px'}}/>
        <p>
          Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial
           intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human
            intervention.
        </p>
        <p>
          Because of new computing technologies, machine learning today is not like machine learning of the past. It was born from pattern
          recognition and the theory that computers can learn without being programmed to perform specific tasks; researchers interested in
          artificial intelligence wanted to see if computers could learn from data. The iterative aspect of machine learning is important
          because as models are exposed to new data, they are able to independently adapt. They learn from previous computations to 
          produce reliable, repeatable decisions and results. It’s a science that’s not new – but one that has gained fresh momentum.
        </p>
        <p>
        While many machine learning algorithms have been around for a long time, the ability to automatically apply complex 
        mathematical calculations to big data – over and over, faster and faster – is a recent development. Here are a few widely 
        publicized examples of machine learning applications you may be familiar with:
        </p>
        <ul>
          <li>
            The heavily hyped, self-driving Google car? The essence of machine learning.
          </li>
          <li>
            Online recommendation offers such as those from Amazon and Netflix? Machine learning applications for everyday life.
          </li>
          <li>
            Knowing what customers are saying about you on Twitter? Machine learning combined with linguistic rule creation.
          </li>
          <li>
            Fraud detection? One of the more obvious, important uses in our world today.
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Machinelearning;
