import React, { Component } from "react";
import {Link } from "react-router-dom";
import Computerscience from "./Computerscience";
import Wearabletech from "./Wearabletech";
import Machinelearning from "./Machinelearning";


class Main extends Component {
  render() {
    return (
      <div className="blog-post">
        <div className="post">
          <Link to='/Computerscience'>
          <img src={require('./images/blog1.jpg')} />
          </Link>
          <Link to='/Computerscience'>
            <h2>Why Computer Science?</h2>
          </Link>
          <p>28 Februray 2019</p>
            <p>
            Computer Science is an exciting, challenging, and growing field that impacts the world and everyday life in countless ways. 
            Computer scientists are involved in creating technology and systems that are used in a wide range of industries, 
            including medicine, communications, entertainment, manufacturing, business, and science.
            </p>
        </div>

        <div className="post">
          <Link to='/Wearabletech'>
            <img src={require('./images/blog2.jpg')} />
          </Link>
          <Link to='/Wearabletech'>
            <h2>Wearable Technology</h2>
          </Link>
          <p>12 Decemeber 2017</p>
            <p>
            This technology was developed almost specifically for the healthcare industry. The first and most popular wearables were
             the Jawbone and Fitbit—designed to track a person’s physical activity throughout the day. In the beginning, they were 
             little more than glorified pedometers. <br></br>
            </p>
        </div>
        
        <div className="post">
          <Link to='/Machinelearning'>
            <img src={require('./images/blog3.jpg')} />
          </Link>
          <Link to='/Machinelearning'>
            <h2>Machine Learning</h2>
          </Link>
          <p>05 August 2015</p>
            <p>
              Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial
              intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human 
              intervention. In the beginning, they were little more than glorified pedometers.
            </p>
        </div>
        <div className="clear-fix"></div>
      </div>
    );
  }
}

export default Main;