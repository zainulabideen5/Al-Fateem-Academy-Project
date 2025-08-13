import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'

 class AllCourses extends Component {
    constructor(){
        super();
        this.state={
          myData:[],
          Loading:true
        }
    }
    
     componentDidMount(){
        RestClient.getRequest(AppUrl.CourseAll).then(result=>{
           this.setState({myData:result,Loading:false}); 
        
        })
     }

  render() {
     if(this.state.Loading == true){
        return <Loading/>       
     } else {

     
  const MyList = this.state.myData;
   // Ensure that the base URL is added to the service_logo URL
   const baseUrl = 'http://afareactappapi.test/';  // Replace with your actual base URL

  const MyView = MyList.map((MyList,index)=>{
   return <Col lg={6} md={12} sm={12}>
   <Row>
   <Col lg={6} md={6} sm={12} className="p-2" key={index} >
       <img className="courseImg" src={`${baseUrl}${MyList.small_img}`} />
   </Col>

   <Col lg={6} md={6} sm={12}>
       <h5 className="text-justify serviceName">{MyList.short_title}  </h5>
       <p className="text-justify serviceDescription">{MyList.short_description}</p>
       <Link className="courseViewMore float-left" to={"/coursedetails/" +MyList.id } >View Details</Link>

   </Col>

   </Row> 
</Col>
  })


    return (
       <Fragment>
          <Container className="">
                <h1 className="serviceMainTitle text-center">MY COURSES</h1>
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

export default AllCourses