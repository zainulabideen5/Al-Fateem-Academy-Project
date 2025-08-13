import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import AllServicePage from '../pages/AllServicePage'
import AllCoursesPage from '../pages/AllCoursesPage'
import PortfolioPage from '../pages/PortfolioPage'
import ContactPage from '../pages/ContactPage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import TermsPage from '../pages/TermsPage'
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CoursesDetailsPage from '../pages/CoursesDetailsPage';

 class AppRouter extends Component {
  render() {
    return (
       <Fragment>
         <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/service" component={AllServicePage} />
          <Route exact path="/courses" component={AllCoursesPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/projectdetails/:projectID" component={ProjectDetailsPage} />
          <Route exact path="/coursedetails/:courseID" component={CoursesDetailsPage} />



      </Switch>
       </Fragment>
    )
  }
}

export default AppRouter
