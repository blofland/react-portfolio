import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Nav } from 'react-bootstrap';

function Navigation(props) {
    
    return (<Nav>
      <Nav.Item><Nav.Link href="/">About Me</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/resume">Resume</Nav.Link></Nav.Item>
    </Nav>
    )
    }
export default Navigation;