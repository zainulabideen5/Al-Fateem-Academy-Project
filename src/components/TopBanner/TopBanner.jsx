
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'


 class TopBanner extends Component {
    
    constructor(){
      super();
      this.state={
        title:"...",
        subtitle:"...",
        loading:true
      }
    }
      componentDidMount(){
        RestClient.getRequest(AppUrl.HomeTopTitle).then(result=>{
          this.setState({title:result[0]['home_title'], subtitle:result[0]['home_subtitle'],loading:false});
        }).catch(error=>{
            this.setState({title:"500 Internal Server Error",subtitle:"????"})
        });
      }

  render() {
    if(this.state.loading == true){
       return <Loading/>
    } else { 

    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
         <div className="topBannerOverlay" >
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                <h1 className='topTitle'>{this.state.title}</h1>
                <h4 className='topSubTitle'>{this.state.subtitle}</h4>
                <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
         </div>
        </Container>
      </Fragment>
    )
  } // End Else
  }
}

export default TopBanner