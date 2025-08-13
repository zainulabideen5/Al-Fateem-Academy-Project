import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'

class ClientReview extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      Loading:true
    };
  }

  componentDidMount() {
    RestClient.getRequest(AppUrl.ClientReview).then(result => {
      console.log(result); // Check the API response
      this.setState({ myData: result, Loading:false });
    });
  }

  render() {
    if(this.state.Loading == true){
       return <Loading/>
    } else{


    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,  // Duration in milliseconds for each slide
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    const MyList = this.state.myData;
    const baseUrl = 'http://afareactappapi.test/';  // Replace with your actual base URL

    const MyView = MyList.map((MyList, index) => {
      return (
        <div key={index}>
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img className="circleImg" src={`${baseUrl}${MyList.client_img}`} alt="Client" />
              <h2 className="reviewName">{MyList.client_title}</h2>
              <p className="reviewDescription">{MyList.client_description}</p>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <Fragment>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TESTIMONIALS</h1>
          <div className="reviewbottom"></div>
          <Slider {...settings}>
            {MyView}
          </Slider>
        </Container>
      </Fragment>
    );
  }
  }
}

export default ClientReview;
