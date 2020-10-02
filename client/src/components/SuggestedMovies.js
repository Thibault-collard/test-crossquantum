import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class SuggestedMovies extends Component {
	
	constructor(props) {
		super(props);
		
    this.state = {
			list_suggested_movies : []
    };
	}
	
	componentDidMount() {
		fetch(` https://api.themoviedb.org/3/movie/${this.props.match.params.id}/recommendations?api_key=4f0db1be70e1cbd993ed2c3d03465680&page=1`, {
			method: 'GET',
			headers: {
					'Content-type': 'application/json',
				},
		})
		.then(results => results.json())
		.then(res => {
			this.setState({list_suggested_movies: res.results});
		})					
	}

	componentWillReceiveProps() {
	}

  render() {
		var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
		console.log('test',this.state.list_suggested_movies)
    return (
        <div>
					<Slider {...settings}>
						{this.state.list_suggested_movies.map( (item,i) => (
							<div>
								<img variant="top" style={{width:"100%"}}src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
							</div>
						))}
					</Slider>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
	list: state.movies,
});

export default connect(
	 mapStateToProps,
)(withRouter(SuggestedMovies));
