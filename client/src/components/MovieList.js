import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import _ from 'lodash';
class MovieList extends Component {
  
  addToLocalStorage = e => {
    localStorage.setItem(`${e.target.value}`, _.find(this.props.list, { 'id': parseInt(e.target.value)}).original_title);
  };

  render() {
    return (
        <div>
              <Row>
                  {this.props.list.map( (item,i) => (
                  <Card style={{ width: '21rem', margin: "25px"}}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                  <Card.Body style={{backgroundColor:"#e8e8e882"}}>
                    <Card.Title ><div key={i}></div>{item.original_title}</Card.Title>
                    <Card.Text style={{height:"110px",overflowY:"scroll",scrollbarColor: "lightgrey #d3d3d300",fontSize:"0.88rem"}}>
                    {item.overview}
                    </Card.Text>
                    <Button style={{backgroundColor: "#a81e41",border: "0px"}} href={`/movies/${item.id}`}> See more </Button>
                    <Button onClick={this.addToLocalStorage} value={item.id} style={{backgroundColor: "black",border: "0px",marginLeft:"10px"}}> Add to my list </Button>

                  </Card.Body>
                </Card>
                ))} 
                
              </Row>
        </div>
    );
  }
}

export default MovieList;