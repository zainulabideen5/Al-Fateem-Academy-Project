import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import CoursesDetails from '../components/CoursesDetails/CoursesDetails'
import Footer from '../components/Footer/Footer'

 class CoursesDetailsPage extends Component {
  constructor({match}){
    super();
    this.state={
      CoursePassedID:match.params.courseID
    }
  }
  // scroll your window from top.
  componentDidMount(){
    window.scroll(0,0);
   }
  render() {
    return (
       <Fragment>
         <TopNavigation title="Courses Detail" />
         <PageTop pagetitle="Courses Details" />
         <CoursesDetails id={this.state.CoursePassedID} />
         <Footer/>
       </Fragment>
    )
  }
}

export default CoursesDetailsPage