import React, { Component } from "react";
import {
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";
 import {Button, ListGroup, Badge, Spinner} from "react-bootstrap"

class Newsdata extends Component {
  // state = {
  //   loading: true,
  //   articles: [],
  //   refreshTime: 0
  // };
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
    const url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d1ec5fe61aaf4ed2a8c04811787da869";
    fetch(url).then(response => response.json()).then(data => {
      this.setState({
        articles: data.articles,
        loading: false,
        refreshTime: this.state.refreshTime + 1
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
        <div>loading...</div>
         ) : (
         <div>
           <form action="/">
           {/* <Link to='/'><Button variant="primary">Home</Button></Link> */}
           </form>
             <h4>
              Top 10 Google News Headlies<Badge pill variant="success"> Refreshed {this.state.refreshTime} Times</Badge> 
              <Spinner animation="grow" />
            </h4>
           <ListGroup style={{height: '20px', fontSize: '15px'}}>
              {this.state.articles.map(articles =>
              <ListGroup.Item key={articles.url}><a href={articles.url} target="_blank">{articles.title}</a></ListGroup.Item>
              )}
           </ListGroup>
           {/* <ul>
            {this.state.articles.map(articles =>
            <li key={articles.url}><a href={articles.url} target="_blank">{articles.title}</a></li>
            )}
          </ul> */}
        </div>
         )}
      </div>
    );
  }
}
 
export default Newsdata;