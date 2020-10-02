import React, { Component } from 'react';
import { getLatestMovies } from "../actions/authActions";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import store from '../store/store';
import MovieList from './MovieList';
import SortButton from './SortButton';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            list: [],
        };
    } //end constructor

    componentDidMount() {

      this.props.getLatestMovies()
    }

    componentWillReceiveProps() {
      this.setState({ list: store.getState().movies.list_recent});
      
      
    }

    onSubmit = (e) =>{
      e.preventDefault();
    };

    render() {
      
      
        return (
          <>
          <Container style={{maxWidth: "1555px"}}>
            <SortButton list={this.state.list}/>
            <MovieList list={this.state.list}/>
          </Container>
          </>
        );
      }
}

const mapStateToProps = state => ({
  list: state.movies
});

export default connect(
    mapStateToProps,
    { getLatestMovies }
  )(withRouter(App));