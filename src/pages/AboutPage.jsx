import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'

 class AboutPage extends Component {
  
// scroll your window from top.
   componentDidMount(){
    window.scroll(0,0);
   }

  render() {
    return (
       <Fragment>
         <TopNavigation title="About Us"/>
         <PageTop pagetitle="About Us" />
         <AboutDescription/>
         <Footer/>
       </Fragment>
    )
  }
}

export default AboutPage