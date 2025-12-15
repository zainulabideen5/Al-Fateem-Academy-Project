import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'


 class Footer extends Component {
    constructor(){
        super();
        this.state={
            address:"...",
            email:"...",
            phone:"...",
            facebook:"...",
            youtube:"...",
            twitter:"...",
            footer_credit:"...",
            Loading:true
        }
    }
     componentDidMount(){
        RestClient.getRequest(AppUrl.FooterData).then(result=>{
           this.setState({
             // address:result[0]['address'],
             // email:result[0]['email'],
             // phone:result[0]['phone'],
             // facebook:result[0]['facebook'],
             // youtube:result[0]['youtube'],
             // twitter:result[0]['twitter'],
             footer_credit:result[0]['footer_credit'],
             Loading:false
           }); 
        })
     }
  render() {
    if(this.state.Loading == true ){
        return <Loading/>
    } else {

    
    return (
     <Fragment>
         <Container fluid={true} className="footerSection">
            <Row>
                <Col lg="3" md={6} sm={12} className="p-5 text-center" >
                <h2 className="footerName text-center">Follow Us </h2>    
                    <a className="facebook social" href={this.state.facebook}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />  
                    </a>
                    <a className="youtube social" href={this.state.youtube}>
                    <FontAwesomeIcon icon={faYoutube} size="2x" />  
                    </a>
                    <a className="twitter social" href={this.state.twitter}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />  
                    </a>
                </Col>
                <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">Address</h2>
                  <p className="footerDescription">
                  {this.state.address}<br></br>
                  <FontAwesomeIcon icon={faEnvelope}  /> Email : {this.state.email}<br></br>
                  <FontAwesomeIcon icon={faPhone}  /> Phone : {this.state.phone}<br></br>
            </p>
                </Col>
            <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                    <h2 className="footerName">Information </h2>
                    <NavLink   className="footerLink" to="/about">About Me  </NavLink> <br></br>
                    <NavLink   className="footerLink" to="/service">Company Profile  </NavLink> <br></br>
                    <NavLink   className="footerLink" to="/contact">Contact Us  </NavLink> <br></br>

                </Col>
                <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                    <h2 className="footerName">Policy  </h2>
                    <NavLink   className="footerLink" to="/refund">Refund Policy  </NavLink> <br></br>
                    <NavLink   className="footerLink" to="/terms">Terms & Condition  </NavLink> <br></br>
                    <NavLink   className="footerLink" to="/privacy">Privacy Policy  </NavLink> <br></br>

                </Col>
            </Row>
         </Container>
         <Container fluid={true} className="text-center copyrightSection">
            <a className="copyrightlink" href="#">{this.state.footer_credit}</a>
        </Container>
     </Fragment>
    )
}
  }
}

export default Footer
