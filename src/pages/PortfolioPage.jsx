import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'

 class PortfolioPage extends Component {
  // scroll your window from top.
  componentDidMount(){
    window.scroll(0,0);
   }
  render() {
    return (
       <Fragment>
         <TopNavigation title="Our Protfolio"/>
         <PageTop pagetitle="Our Protfolio" />
         <AllProjects/>
         <Footer/>
       </Fragment>
    )
  }
}

export default PortfolioPage