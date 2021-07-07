import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Header.css';
    
function Header() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);


        
        return (

            <>

        <div className="portfolio">
        <div className="heroImage" style={{
           backgroundImage: `url(${process.env.PUBLIC_URL + `/myimage.jpg`})`,
           backgroundRepeat: 'no-repeat',
           position: 'fixed'
           }}>
            
        
            <Container className="themed-container" fluid={true}>
                <div className="header">
                <div className="logo">
                <img src="images\logo.png"/>
                </div>
                <a href="#" className="menu-btn">
               
                </a>
                <div>
      <Navbar className="homeNav"  expand="md">
        <NavbarBrand href="/" className="navLink">HOME</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="navLink">ABOUT ME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navLink">RESUME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="navLink">CONTACT</NavLink>
            </NavItem>
          </Nav>
        
             </Collapse>
            </Navbar>
                </div>
                 </div>
                
            </Container>
            </div>
            </div>
        </>
    );
}

export default Header;
