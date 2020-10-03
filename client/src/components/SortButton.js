import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class SortButton extends Component {
	least = e => {

	this.props.list.sort(function (a, b) {
		return new Date(a.release_date) - new Date(b.release_date)
	});
	}

	most = e => {

		this.props.list.sort(function (a, b) {
			return new Date(b.release_date) - new Date(a.release_date)
		});
		}
	

  render() {
    return (
        <div>
					<Dropdown style={{display:"block",textAlign:"right",marginRight:"25px"}}>
						<Dropdown.Toggle style={{backgroundColor:"rgb(168, 30, 65)",border:"0px"}}>
							Sort by : 
						</Dropdown.Toggle>
						
						<Dropdown.Menu>
							<Dropdown.Item onClick={this.most} href="#/action-1"> Most recent releasing date</Dropdown.Item>
							<Dropdown.Item onClick={this.least} href="#/action-2"> Least recent releasing date</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					
        </div>
    );
  }
}

export default SortButton;