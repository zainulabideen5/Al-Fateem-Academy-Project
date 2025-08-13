import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopBanner from '../components/TopBanner/TopBanner'
import Welcome from '../components/Welcome/Welcome'
import Services from '../components/Services/Services'
import Analysis from '../components/Analysis/Analysis'
import Summary from '../components/Summary/Summary'
import Courses from '../components/Courses/Courses'
import RecentProject from '../components/RecentProject/RecentProject'
import Video from '../components/Video/Video'
import ClientReview from '../components/ClientReview/ClientReview'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'

 class HomePage extends Component {
  // scroll your window from top.
  componentDidMount(){
    window.scroll(0,0);
   }
  render() {
    return (
       <Fragment>
                <TopNavigation title="Home alfateemreactapp " />
                <TopBanner/>
                <Welcome/>
                <Services/>
                <Analysis />
                <Summary />
                <Courses/>
                <RecentProject/>
                <Video/>
                <ClientReview/>
                <AboutMe/>
                <Footer/>
                </Fragment>
    )
  }
}

export default HomePage