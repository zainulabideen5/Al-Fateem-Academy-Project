import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import projectDetails from '../../assets/images/pdetails.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'

 class ProjectDetails extends Component {
    constructor(props){
        super();
        this.state={
            MyProjectId:props.id,
            img_two:"...",
            project_name:"...",
            project_description:"...",
            project_features:"...", 
            live_preview:"...",
            Loading:true
        }
    }
     
     componentDidMount(){
        RestClient.getRequest(AppUrl.ProjectDetails+this.state.MyProjectId).then(result=>{
            // Ensure the image URL is absolute (convert if it's relative)
        let imageUrl = result['img_two'];
        if (!imageUrl.startsWith('http')) {
            imageUrl = 'http://afareactappapi.test/' + imageUrl; // Replace with your actual backend URL
        }
            this.setState({
                img_two:imageUrl,
                project_name:result['project_name'],
                project_description:result['project_description'],
                project_features:result['project_features'],
                live_preview:result['live_preview'],
                Loading:false 
            });       
        })
     }


  render() {
    if(this.state.Loading == true){
       return <Loading/>
    } else{

    
    return (
      <Fragment>
          <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="about-thumb-wrap after-shape">
                            <img src={this.state.img_two} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="mt-5">
                        <div className="project-details">
                            <h1 className="projectDetailsText">{this.state.project_name}</h1>  
                            <p className="detailsName">
                            { ReactHtmlParser(this.state.project_description) }
                                </p>

                            <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />
                            { ReactHtmlParser(this.state.project_features) }
                              </p>
                              <Button variant="info" href={this.state.live_preview}> Live Preview </Button>
                            
                                              </div>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
}
  }
}

export default ProjectDetails