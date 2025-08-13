import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'


 class AboutDescription extends Component {
   constructor(){
      super();
      this.state={
        aboutdesc:"...",
        Loading:true
         }
     }
     componentDidMount(){
      RestClient.getRequest(AppUrl.Information).then(result=>{
        this.setState({aboutdesc:result[0]['about'],Loading:false});
      })
    }
  
  render() {
    if(this.state.Loading == true){
      return <Loading/>
    } else{

    
    return (
       <Fragment>
           <Container className="mt-5" >
              <Row>
                 <Col sm={12} lg={12} md={12}>
                    {ReactHtmlParser(this.state.aboutdesc)}
                 </Col>
              </Row>
           </Container>
       </Fragment>
    )
  }
  }
}

export default AboutDescription