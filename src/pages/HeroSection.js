import React from 'react';
import { Button } from 'reactstrap';
import './HeroSection.css';

function HeroSection() {
    return (
        <>
        <div className="home" id="heroSection">
    
       
        <div className="homeText">
            <h1>Akshu Rana</h1>
            <p>Hello! I am a web developer. </p>
            <Button><a href="#contact">CONTACT ME</a></Button>
        </div>
  
    </div>
        </>
    )
}

export default HeroSection

