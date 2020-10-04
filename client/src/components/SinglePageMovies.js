import React, { Component } from "react";
import _, { forEach } from 'lodash';
import store from '../store/store';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getLatestMovies } from "../actions/authActions";
import { getListGenreMovies } from "../actions/authActions";
import SuggestedMovies from './SuggestedMovies'
import '../App.css'
import { Link } from 'react-router-dom';


class SinglePageMovies extends Component {
	
  constructor(props) {
		super(props);
		
    this.state = {
			select_movie: "",
			genre_movie:"",
			list: [],
    };
  }
	
	
  componentDidMount() {
		this.props.getLatestMovies()
		this.props.getListGenreMovies()
	}

  
	componentWillReceiveProps() {
		this.setState({ list: store.getState().movies.list_recent});
		
		this.setState({select_movie:_.find(store.getState().movies.list_recent, { 'id': parseInt(this.props.match.params.id) })})
		
		//this.setState({genre_movie:_.find(store.getState().genre, { 'id': parseInt(this.props.match.params.id) })})
	}

  render() {
    return (
			<>
			<div className="container-movie">
				<div className="backGroundPic" style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/original/${this.state.select_movie.backdrop_path}` + ")" }}></div>
				<img style={{width:"20%",bottom:"315px", left:"16px",position:"absolute",margin:"20px"}}src={`https://image.tmdb.org/t/p/original/${this.state.select_movie.poster_path}`}></img>
				<div style={{width:"90%",marginLeft:"98px",bottom:"55px", left:"16px", position:"absolute"}}><SuggestedMovies/></div>
				<Link to ='/' style={{bottom:"860px", left:"450px",color:"white", textDecoration:"underline",position:"absolute"}}> « Back to the list of movies</Link>
				<div style={{bottom:"770px", left:"450px",color:"white",fontSize:"3em",position:"absolute"}}>{this.state.select_movie.original_title}</div>
				<div style={{bottom:"673px", left:"450px",fontSize:"1em",fontWeight:"100px",color:"white",width:"64%",position:"absolute"}}>{this.state.select_movie.overview}</div>
			</div>
			
			</>
    );
  }
}

const mapStateToProps = (state) => ({
	list: state.movies,
});

export default connect(
	 mapStateToProps,
	 {getLatestMovies,getListGenreMovies}
)(withRouter(SinglePageMovies));
