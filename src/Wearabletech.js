import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";


class Wearabletech extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col style={{paddingBottom: '20px'}} sm={5}><h2>Wearable Technology</h2></Col>
        </Row>
        
        <img src={require('./images/blog2.jpg')} alt="" style={{maxWidth: '300px', maxHeight: '400px', paddingBottom: '20px'}}/>
        <p>
          This technology was developed almost specifically for the healthcare industry. The first and most popular wearables were the 
          Jawbone and Fitbit—designed to track a person’s physical activity throughout the day. In the beginning, they were little
          more than glorified pedometers. Today, they’ll do everything from tracking activity, to monitoring heart rate, to quantifying
          a person’s sleep.
        </p>
        <p>
          The most famous and diversified piece of wearable technology is the Apple Watch. Right now, it has one of the largest market 
          shares, and has the most functions and features when compared to other wearable devices. In short, wearables are any piece of 
          technology that the user wears on their body—it is as simple as that. They may wear it like glasses (Google Glass), or it 
          might be strapped to their arm (Fitbit, Jawbone, Fuel Band, Apple Watch, etc.).
        </p>
        <p>
          Wearable devices such as activity trackers are an example of the Internet of Things, since "things" such as electronics, 
          software, sensors, and connectivity are effectors that enable objects to exchange data (including data quality[5]) through the
          internet with a manufacturer, operator, and/or other connected devices, without requiring human intervention. Wearable 
          technology has a variety of applications which grows as the field itself expands. It appears prominently in consumer 
          electronics with the popularization of the smartwatch and activity tracker. Apart from commercial uses, wearable technology 
          is being incorporated into navigation systems, advanced textiles, and healthcare.
        </p>
       </div>
    );
  }
}
 
export default Wearabletech;
