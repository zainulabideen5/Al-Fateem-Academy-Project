import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'

 class AllCoursesPage extends Component {
   // scroll your window from top.
   componentDidMount(){
      window.scroll(0,0);
     }
  render() {
    return (
       <Fragment>
          <TopNavigation title="Our Courses" />
          <PageTop pagetitle="Our Courses" />
          <AllCourses/>
          <Footer/>
       </Fragment>
    )
  }
}

export default AllCoursesPage