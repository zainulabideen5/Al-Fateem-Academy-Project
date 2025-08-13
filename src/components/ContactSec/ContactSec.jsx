import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'

 class ContactSec extends Component {
  constructor(){
    super();
    this.state={
      address:"...",
      email:"...",
      phone:"...",
      Loading:true
    }
  }
   componentDidMount(){
    RestClient.getRequest(AppUrl.FooterData).then(result=>{
      this.setState({
        address:result[0]['address'],
        email:result[0]['email'],
        phone:result[0]['phone'],
        Loading:false 
      });
    })
   }
      
    sendcontact(){
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
        // alert(name+"/"+email+"/"+message);
      
      let jsonObject = {name:name,email:email,message:message}
      RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result=>{
        alert(result);
      }).catch(error=>{
        alert("Error");
      })

    }

  render() {
    if(this.state.Loading == true){
      return <Loading/>
    } else {

    
    return (
      <Fragment>
          <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <h1 className="serviceName">Quick Connect</h1>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Control type="text" id="name" placeholder="Enter Your Name" /> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control type="email" id="email" placeholder="Enter Your email" /> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control as="textarea" id="message" rows={3} placeholder="Enter Your Message" />
                        </Form.Group>						   
                        <Button onClick={this.sendcontact} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Discuss Now</h1>

                        <p className="serviceDescription">
                            {this.state.address}.<br></br>
                            <FontAwesomeIcon icon={faEnvelope}  /> Email : {this.state.email}<br></br>
                            <FontAwesomeIcon icon={faPhone}  /> Phone : {this.state.phone}<br></br>
                        </p>
                    </Col>
                    </Row>
            </Container>
      </Fragment>
    )
  }
  }
}

export default ContactSec