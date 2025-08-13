import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'

 class TermsDescription extends Component {
  constructor(){
    super();
    this.state={
        termsdesc:"...",
        Loading:true
    }
}
 componentDidMount(){
    RestClient.getRequest(AppUrl.Information).then(result=>{
     this.setState({termsdesc:result[0]['terms'],Loading:false});
    })
 }
  render() {
    if(this.state.Loading == true){
       return <Loading/>
    } else {

    
    return (
        <Fragment>
        <Container>
        <Row>
            <Col lg={12} md={12} sm={12}>
               {ReactHtmlParser(this.state.termsdesc)}
            
            </Col>
        </Row>
        </Container>
    </Fragment>
    )
  }
  }
}

export default TermsDescription