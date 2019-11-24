import React from "react";
import {Card, Button} from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function BlogCard(props) {
  return (
     <Card style={{ width: '18rem' }}>
        <Link to={props.url}><Card.Img variant="top" src={props.src} className="card-img"/></Link>
          {/* <a href={props.url}><Card.Img variant="top" src={props.src}/></a> */}
          <Card.Body>
            <strong><Card.Title>{props.title}</Card.Title></strong>
            <Card.Text>
              {props.date}
            </Card.Text>
            <Card.Text>
              {props.text}
            </Card.Text>
            <Link to={props.url}><Button variant="primary">Read More</Button></Link>
          </Card.Body>
    </Card>
  );
}

export default BlogCard;