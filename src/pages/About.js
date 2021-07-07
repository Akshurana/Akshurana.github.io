import React from 'react';
import './About.css';

function About() {
    return (
        <div className="aboutSection">
            <h1>About Me</h1>
            <h4>Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus</h4>
            <div className ="age">
                <div className="residence" >
                    <h4><span>AGE :</span>  23</h4>
                    <h4><span>FREELANCE :</span>  Available</h4>
                    <h4><span>PHONE :</span>  + 012 345 6789</h4>
                </div>
                <div className="residence">
                <h4><span>RESIDENCE :</span>  India</h4>
                    <h4><span>ADDRESS :</span>  Chandigarh</h4>
                    <h4><span>E-MAIL :</span>  rana.akshu02@gmail.com</h4>
                </div>
            </div>
        </div>
    )
}

export default About;
