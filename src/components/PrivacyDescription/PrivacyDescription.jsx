import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'

 class PrivacyDescription extends Component {
  constructor(){
    super();
    this.state={
        privacydesc:"...",
        Loading:true
    }
}
 componentDidMount(){
    RestClient.getRequest(AppUrl.Information).then(result=>{
     this.setState({privacydesc:result[0]['privacy'],Loading:false});
    })
 }
  render() {
    if(this.state.Loading == true ){
        return <Loading/>
    } else{

    
    return (
        <Fragment>
        <Container className="mt-5">
        <Row>
            <Col lg={12} md={12} sm={12}>
                 {ReactHtmlParser(this.state.privacydesc)}
            
            </Col>
        </Row>
        </Container>
    </Fragment>
    )
  }
  }
}

export default PrivacyDescription