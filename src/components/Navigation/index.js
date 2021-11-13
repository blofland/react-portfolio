import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import "../../App.css"
function Navigation(props) {
    
    return (<Nav><ul id="nav">
      <li><Nav.Item><NavLink to="/">About Me</NavLink></Nav.Item></li>
      <li><Nav.Item><NavLink to="/portfolio">Portfolio</NavLink></Nav.Item></li>
      <li><Nav.Item><NavLink to="/contact">Contact</NavLink></Nav.Item></li>
      <li><Nav.Item><NavLink to="/resume">Resume</NavLink></Nav.Item></li></ul>
    </Nav>
    )
    }
export default Navigation;