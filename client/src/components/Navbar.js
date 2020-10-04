import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../QuantumMovies.png';
import MyListButton from './MyListButton'
class Nav extends Component {
  render() {
    return (
      <Navbar variant="dark" style={{backgroundColor:"black"}}>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={LogoImg}
        width="50%"
        className="d-inline-block align-top"
      />
    	</Navbar.Brand>
      <MyListButton/>
  	</Navbar>
    );
  }
}

export default Nav;


