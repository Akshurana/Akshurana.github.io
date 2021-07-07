import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './Contact.css';

function Contact() {
    return (
        <>
        <div className="contactme">
            <div className="letsTalk">
                <h1>Contact</h1>
                <h2>Let's Talk</h2>
            </div>
<div  className="messageRow">
        <Row>
         <Col xs="6">
            <div className="contactForm">
            <Form>

            <FormGroup row>
        <Label for="contactEmail" sm={4}>Full Name :</Label>
        <Col sm={8}>
          <Input type="text" name="name" id="name" placeholder="Enter your Name" />
        </Col>
      </FormGroup> 
      <FormGroup row>
        <Label for="contactEmail" sm={4}>E-mail :</Label>
        <Col sm={8}>
          <Input type="email" name="email" id="exampleEmail" placeholder="example@domain.com" />
        </Col>
      </FormGroup> 
      <FormGroup row>
        <Label for="contactText" sm={4}>Send Message :</Label>
        <Col sm={8}>
          <Input type="text" name="text" id="contactText" />
        </Col>
      </FormGroup>

     <FormGroup  row>
        <Col sm={{ size: 5, offset: 4 }}>
          <Button>Send Message</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    </Col>


           
            <Col xs="5">
            <div className ="aboutInfo">
                <div className="aboutMe" >
                    <h1>Akshu Rana</h1>
                    <h2>Web Developer</h2>
                    <div className="aboutAge">
                    <h4><span>AGE :</span> 23</h4>
                    <h4><span>FREELANCE :</span> Available</h4>
                    <h4><span>PHONE :</span> + 012 345 6789</h4>
                <h4><span>RESIDENCE :</span> India</h4>
                    <h4><span>ADDRESS :</span> Chandigarh</h4>
                    <h4><span>E-MAIL :</span> rana.akshu02@gmail.com</h4>
                    </div>
                    <div className="author"> Akshu.</div>
                    </div>
            </div>
            </Col>
            </Row>
            </div>
            <div className="socialMedia">
            <Button><img src="images\facebook.png"/></Button>
            <Button><img src="images\insta.png"/></Button>
            <Button><img src="images\twitter.png"/></Button>
            </div>
        </div>
        </>
    )
}
export default Contact
