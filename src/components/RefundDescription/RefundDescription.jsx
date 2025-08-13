import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'


 class RefundDescription extends Component {
    constructor(){
        super();
        this.state={
            refund:"...",
            Loading:true
        }
    }
     componentDidMount(){
        RestClient.getRequest(AppUrl.Information).then(result=>{
         this.setState({refund:result[0]['refund'],Loading:false});
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
             {ReactHtmlParser(this.state.refund)}
            
            </Col>
        </Row>
        </Container>
    </Fragment>
    )
}
  }
}

export default RefundDescription