import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'

 class AllProjects extends Component {
    constructor(){
        super();
        this.state={
          myData:[],
          Loading:true
        }
    }
    
     componentDidMount(){
        RestClient.getRequest(AppUrl.ProjectAll).then(result=>{
           this.setState({myData:result,Loading:false}); 
        
        })
     }
  render() { 
   if(this.state.Loading == true){
      return <Loading/>
   } else{

   
    const MyList = this.state.myData;
     // Ensure that the base URL is added to the service_logo URL
     const baseUrl = 'http://afareactappapi.test/';  // Replace with your actual base URL

    const MyView = MyList.map((MyList,index)=>{
    return <Col lg={4} md={6} sm={12} key={index}>
    <Card className="projectCard">
    <Card.Img variant="top" src={`${baseUrl}${MyList.img_one}`} />
    <Card.Body>
    <Card.Title className="serviceName">{MyList.project_name}</Card.Title>
    <Card.Text className="serviceDescription">
    {MyList.project_description} </Card.Text>
    <Button variant="primary"><Link className="link-style" to={"/projectdetails/" +MyList.id}> Vist WebSite</Link></Button>
    </Card.Body>
    </Card>
     </Col>

    })

    return (
       <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div>
                <Row>
                    {MyView}     
                </Row>

            </Container>
       </Fragment>
    )
   }
  }
}

export default AllProjects