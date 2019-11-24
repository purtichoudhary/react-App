import React, { Component } from "react";

import { CardDeck} from "react-bootstrap";
import blog1 from './images/blog1.jpg';
import blog2 from './images/blog2.jpg';
import blog3 from './images/blog3.jpg';
import BlogCard from './BlogCard';

class Main extends Component {
  
  render() {
    return (
      <CardDeck>
       <BlogCard src={blog1} title='Why Computer Science?' date='28 Februray 2016' url='/Computerscience'
            text='Computer Science is an exciting, challenging, and growing field that impacts the world and everyday life in countless ways. 
            Computer scientists are involved in creating technology and systems that are used in a wide range of industries, 
            including medicine, communications, entertainment, manufacturing, business, and science.'/>
       <BlogCard src={blog2} title='Wearable Technology' date='16 April 2018' url='/Wearabletech'
            text=' This technology was developed almost specifically for the healthcare industry. The first and most popular wearables were
             the Jawbone and Fitbit—designed to track a person’s physical activity throughout the day. In the beginning, they were 
             little more than glorified pedometers. '/>
       <BlogCard src={blog3} title='Machine Learning' date='28 March 2019' url='/Machinelearning'
            text='Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial
              intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human 
              intervention. In the beginning, they were little more than glorified pedometers.'/>
      </CardDeck>
    );
  }
}
export default Main;