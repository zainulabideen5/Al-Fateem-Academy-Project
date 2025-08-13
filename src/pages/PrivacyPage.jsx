import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'
import Footer from '../components/Footer/Footer'

 class PrivacyPage extends Component {
  // scroll your window from top.
  componentDidMount(){
    window.scroll(0,0);
   }
  render() {
    return (
       <Fragment>
         <TopNavigation title="Privacy & Policy" />
         <PageTop pagetitle="Privacy and Policy" />
         <PrivacyDescription/>
         <Footer/>
       </Fragment>
    )
  }
}

export default PrivacyPage