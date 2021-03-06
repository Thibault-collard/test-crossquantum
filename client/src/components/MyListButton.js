import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import '../App.css'

class MyListButton extends Component {

	constructor() {
		super();
		this.state = {
				copy_localStorage: [],
		};
	} 

	remove_item = (key) => {
		localStorage.removeItem(key)
	}

	refreshData = () => {
		this.setState({copy_localStorage:localStorage})
	}

  render() {
    return (
        <div>
					<Dropdown onClick={this.refreshData} style={{border: "1px solid white",left:"121vh"}}>
						<Dropdown.Toggle style={{textAlign:"left",backgroundColor:"black",border:"0px"}}>
							My List : 
						</Dropdown.Toggle>
						
						
							{localStorage.length != 0 ?
							<Dropdown.Menu> 
								{Object.keys(this.state.copy_localStorage).map( key => {
									return this.state.copy_localStorage.getItem(key).length > 1 ?
									
										<ListGroup>
										<ListGroup.Item action>
										<Link style={{textDecoration:"none",color: "inherit"}}to ={`/movies/${key}`}> {this.state.copy_localStorage.getItem(key)}</Link>
										<FontAwesomeIcon onClick={() => { this.remove_item(key) }} style={{marginLeft:"10px"}}icon={faTrash} />
										</ListGroup.Item>
									</ListGroup>
									: null
									})}
									</Dropdown.Menu>
							: null}
								
							
						
					</Dropdown>
        </div>
    );
  }
}

export default MyListButton;