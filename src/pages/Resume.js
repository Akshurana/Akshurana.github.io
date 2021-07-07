import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import './Resume.css';

function Resume() {
    return (
        <>
        <div className="resume">
        <div className="education">
        <h1>Education</h1>
        <h2>Studied at</h2>
        <div className="codingSkills">
            <Row>
                <Col>
                <h3>Web Designing Course</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</h4>
                </Col>
                <Col>
                <h3>Programming Course</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</h4>
                </Col>
                <Col>
                <h3>Art Course</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</h4>
                </Col>
            </Row>
        </div>
        
        </div>

        <div className="education">
        <h1>Coding Skills</h1>
        <h2>Developing on</h2>
        <div className="codingSkills">
            <Row>
                <Col>
                <h3>JavaScript</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt.</h4>
                <div color="danger" className="text-center">75%</div>
      <Progress value={75} />
      </Col>
                <Col>
                <h3>HTML/CSS</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt.</h4>
                <div color="danger" className="text-center">75%</div>
      <Progress value={75} />
                </Col>
                <Col>
                <h3>WordPress</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt.</h4>
                <div color="danger" className="text-center">75%</div>
      <Progress value={75} />
    
                </Col>
            </Row>
        </div>
        
        </div>

        <div className="education">
        <h1>Reviews</h1>
        <h2>What Customer Says</h2>
        <div className="codingSkills">
            <Row>
                <Col>
                <img src="images\53-512.png"/>
                <h3>Joseph Mackey</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</h4>
                </Col>
                <Col>
                <img src="images\53-512.png"/>
                <h3>Laura Owens</h3>
                <h4>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</h4>
                </Col>
               
            </Row>
        </div>
        
        </div>
        <div className="education">
        <h1>Clients</h1>
        <h2>My Partners</h2>
        <div className="codingSkills">
            <Row>
                <Col>
                <img src="images\client3.png"/>
                </Col>
                <Col>
                <img src="images\client2.png"/>
                </Col>
                <Col>
                <img src="images\client1.png"/>
                </Col>
                <Col>
                <img src="images\client4.png"/>
                </Col>
                <Col>
                <img src="images\client5.png"/>
                </Col>
            </Row>
        </div>
        
        </div>

        </div>
        </>
    )
}

export default Resume;
