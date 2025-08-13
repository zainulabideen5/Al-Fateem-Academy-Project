import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading'


 class Analysis extends Component {
   constructor(){
    super();
    this.state={
      data:[],
      techdesc:"...",
      Loading:true
       }
   }

   componentDidMount(){
    RestClient.getRequest(AppUrl.ChartData).then(result=>{
      this.setState({data:result,Loading:false});
    })
    RestClient.getRequest(AppUrl.HomeTechDesc).then(result=>{
      this.setState({techdesc:result[0]['tech_description']});
    })
  }

  render() {
    if(this.state.Loading == true){
     return <Loading/>
    } else{

    
    var blue = "#051b35"
    return (
      <Fragment>
         <Container className="text-center" >
                <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                <div className="bottom"></div>
                <Row>
                  <Col style={{width:'50%', height:'300px'}} lg={6} md={12} sm={12}>
                  {/*<h1>BarChart</h1> */}
                  <ResponsiveContainer>
                  <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Techonology" />
                  <Tooltip/>
                    <Bar dataKey="Projects" fill={blue} />
                  </BarChart>
                </ResponsiveContainer>              
                  </Col>

                  <Col lg={6} md={12} sm={12}>
                  <p className="text-justify serviceDescription">
                    { ReactHtmlParser(this.state.techdesc) }
                      </p>      
                  </Col> 
                </Row>
            </Container>
        </Fragment>
    )
  }
  }
}

export default Analysis