import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';

class StarRating extends Component {	

	changeRating (value, id) {
		// console.log('test')
		// console.log(value)
		// console.log(id)
		localStorage.setItem(`rating-${id}`, value)
		this.setState({value:localStorage.getItem(`rating-${id}`)})
	}
	
  state = { value: localStorage.getItem(`rating-${this.props.id}`) };
  render() {
    return (
			<div>
				<div style={{marginTop:"-11px",marginBottom:"10px"}}>
					<BeautyStars
					value={this.state.value}
					onChange={value => this.changeRating(value, this.props.id) }
					size="15px"
					activeColor="#922f44"
				/>
				</div>
			</div>
    );
  }
}

export default StarRating;