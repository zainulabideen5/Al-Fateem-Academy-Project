import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from '../Loading/Loading'

class Services extends Component {
    constructor() {
        super();
        this.state = {
            myData: [],
            Loading:true
        };
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.Services)
            .then(result => {
                this.setState({ myData: result, Loading:false });
            })
            .catch(error => {
                this.setState({ myData: "????" });
            });
    }

    render() {
        if(this.state.Loading == true){
           return <Loading/>
        } else{

        
        const MyList = this.state.myData;
        
        // Ensure that the base URL is added to the service_logo URL
        const baseUrl = 'http://afareactappapi.test/';  // Replace with your actual base URL

        const MyView = MyList.map((MyList, index) => {
            return (
                <Col lg={4} md={6} sm={12} key={index}>
                    <div className="serviceCard text-center">
                        {/* Combine base URL with the relative path */}
                        <img 
                            className="ecommerceIcon" 
                            src={`${baseUrl}${MyList.service_logo}`} 
                           
                        />
                        <h2 className="serviceName">{MyList.service_name}</h2>
                        <p className="serviceDescription">{MyList.service_description}</p>
                    </div>
                </Col>
            );
        });

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <div className="bottom"></div>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }// End False
    }
}

export default Services;
