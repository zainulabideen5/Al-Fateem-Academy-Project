import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import 'video-react/dist/video-react.css';
import { BigPlayButton, Player } from 'video-react';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'


 class Video extends Component {
    constructor(){
        super();
        this.state={
            show:false,
            video_description:"",
            video_url:"",
            Loading:true
        }
    }
     componentDidMount(){
       RestClient.getRequest(AppUrl.HomeVideo).then(result=>{
        this.setState({
          video_description:result[0]['video_description'],
          video_url:result[0]['video_url'],Loading:false  
       });
      }) 
     }
     
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true});

  render() {
    if(this.state.Loading == true){
       return <Loading/>
    } else{

    
    return (
      <Fragment>
         <Container className="text-center">
            <h1 className="serviceMainTitle">OUR VIDEO</h1>
            <div className="bottom" ></div>
            <Row>
                <Col lg={6} md={6} sm={12}>
                 <p className="serviceDescription text-justify">
                    {ReactHtmlParser(this.state.video_description)}                     
                    </p>    
                </Col>
                <Col lg={6} md={6} sm={12} className="videoCard">
                 <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash}   />
                </Col>
            </Row>
         </Container>
         <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Player>
        <source src={this.state.video_url} />
       <BigPlayButton position="center" />
    </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Fragment>
    )
  }
  }
}

export default Video