import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'

 class AllServicePage extends Component {
  // scroll your window from top.
  componentDidMount(){
    window.scroll(0,0);
   }
  render() {
    return (
       <Fragment>
         <TopNavigation title="Our Service"/>
         <PageTop pagetitle="Our Services" />
         <Services/>
         <Footer/>
       </Fragment>
    )
  }
}

export default AllServicePage