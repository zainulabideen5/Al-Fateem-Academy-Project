import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BigPlayButton, Player } from 'video-react'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import Loading from '../Loading/Loading'


 class CoursesDetails extends Component {
    constructor(props){
        super();
         this.state={
            MyCourseId:props.id,
            LongTitle:"...",
            LongDescription:"...",
            TotalDuration:"...",
            TotalLecture:"...",
            TotalStudent:"...",
            SkillAll:"...",
            VideoUrl:"...",
            SmallImg:"...",
            Loading:true
         }
    }
      componentDidMount(){
        RestClient.getRequest(AppUrl.CourseDetails+this.state.MyCourseId).then(result=>{
               // Ensure the image URL is absolute (convert if it's relative)
        let imageUrl = result['small_img'];
        if (!imageUrl.startsWith('http')) {
            imageUrl = 'http://afareactappapi.test/' + imageUrl; // Replace with your actual backend URL
        }
        
          // Ensure Video URL is absolute (if needed)
      let videoUrl = result['video_url'];
      if (videoUrl && !videoUrl.startsWith('http')) {
        videoUrl = 'http://afareactappapi.test/' + videoUrl; // Adjust this to match your API
      }
            this.setState({
                LongTitle:result['long_title'],
                LongDescription:result['long_description'],
                TotalDuration:result['total_duration'],
                TotalLecture:result['total_lecture'],
                TotalStudent:result['total_student'],
                SkillAll:result['skill_all'],
                VideoUrl:videoUrl,
                SmallImg:imageUrl,
                Loading:false
            });
        })
      } 
  render() {
       if(this.state.Loading == true){
           return <Loading/>
       } else {

       
    return (
       <Fragment>
          <Container>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <h1 className="courseDetailsText"> {this.state.LongTitle} </h1>
                        <img className="courseDetaisImg" src= {this.state.SmallImg} />
                        <br></br> <br></br>
                        <p className="CoruseallDescription">
                        {this.state.LongDescription}
                        </p>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div class="widget_feature">
                        <h4 class="widget-title text-center">Course Features</h4>
                        <hr />
                        <ul>
                            <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> {this.state.TotalStudent}</li>
                            <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> {this.state.TotalDuration}</li>
                            <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> {this.state.TotalLecture}</li>
                            <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Technology</li>
                            <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> Android, JavaScript</li>
                            <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> Ayaz Ahmed Mast</li>
                        </ul>
                            <div class="price-wrap text-center">
                            <h5>Price:<span>$54.00</span></h5>
                            <Button variant="warning">ENROLL COURSE</Button>
                        </div>
                        </div>  
                    </Col>
                </Row>
            </Container>

            <br></br><br></br>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="widget_feature">
                            <h1 className="coruseDetailsText"> Skill You Need  </h1>   
                            <hr />
                            <ul>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenass</li>
                                <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                            </ul>           
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Player src={this.state.VideoUrl}>
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>
            </Container>
       </Fragment>
    )
}
  }
}

export default CoursesDetails