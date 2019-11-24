import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Computerscience extends Component {
  render() {
    return (
     <div>
        <Row>
          <Col style={{paddingBottom: '20px'}} sm={5}><h2>Why Computer Science?</h2></Col>
        </Row>
        <img src={require('./images/blog1.jpg')} alt="" style={{maxWidth: '300px', maxHeight: '400px', paddingBottom: '20px'}}/>
        <p>
          Computer Science is an exciting, challenging, and growing field that impacts the world and everyday life in countless ways. 
          Computer scientists are involved in creating technology and systems that are used in a wide range of industries, 
          including medicine, communications, entertainment, manufacturing, business, and science. CS research pushes the 
          state-of-the-art in computing theory and practice, and it leads to new technologies that change the world, such as the 
          personal computer, the internet, cell phones, social media, and much more, as well as new discoveries in science and 
          engineering, new possibilities for social science and the humanities, and creative collaborations with the arts. 
        </p>

        <p>
          Despite all the impressive achievements of the field, we are convinced that there are many more exciting discoveries and 
          applications of computer science yet to come, and you can be part of this process of exploration, discovery, and invention!
          Computer science graduates are in very high demand and earn high salaries from the start. Why? Because employers value the 
          skills that a CS program imparts – problem-solving and analytical skills, teamwork, can-do technical skills, and a capacity 
          for attending to both the critical details and the big picture. While many computer science graduates go on to careers in 
          computing, a CS major is also an excellent starting point for careers in business, law, medicine, and other professions.
        </p>
        <p>
          Why study Computer Science? Because it’s interesting. Because it’s fun. Because it’s challenging. Because you can make a 
          difference in the world. Because you can have an exciting and fulfilling career. For students considering whether or not to 
          pursue a PhD in Computer Science, these videos from the Computing Research Association show young researchers with PhDs 
          discussing their fascinating work in industry. 
        </p>
      </div>    
    )}
}
 
export default Computerscience;
