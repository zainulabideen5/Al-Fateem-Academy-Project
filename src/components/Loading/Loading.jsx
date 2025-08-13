import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from '../../assets/images/loader.svg'
export class Loading extends Component {
  render() {
    return (
     <Fragment>
            <Container className="text-center"  >
             <Row>
                <Col>
                  <img className="LoaderAnimation" src={Loader} />
                </Col>
             </Row>

            </Container>
     </Fragment>
    )
  }
}

export default Loading