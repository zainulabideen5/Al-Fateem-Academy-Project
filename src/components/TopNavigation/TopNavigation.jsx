import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import whiteLogo from '../../assets/images/logo_white.png';
import blackLogo from '../../assets/images/logo_black.png';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
import {NavLink} from "react-router-dom";


 class TopNavigation extends Component {

              constructor(props){
                super();
                this.state={
                  navBarTitle:"navTitle",
                  navBarLogo:[whiteLogo],
                  navBarBack:"navBackground",
                  navbarItem:"navItem",
                  navVariant:"dark",
                  pageTitle:props.title
                }
              }
              
              onScroll=()=>{
                if (window.scrollY>100) {
                this.setState({
                  navBarTitle:'navTitleScroll',
                  navBarLogo:[blackLogo],
                  navBarBack:'navBackgroundScroll',
                  navbarItem:'navItemScroll',
                  navVariant:"light"
                })

                  
                } else if(window.scrollY<100) {
                  this.setState({
                  navBarTitle:'navTitle',
                  navBarLogo:[whiteLogo],
                  navBarBack:'navBackground',
                  navbarItem:'navItem',
                  navVariant:"dark"
                  })
                }
              }

              componentDidMount(){
              window.addEventListener('scroll',this.onScroll)
              }

  render() {
    return (
       <Fragment>
        <title>{this.state.pageTitle}</title>

            <Navbar className={this.state.navBarBack}  collapseOnSelect fixed="top" expand="lg" bg="dark" variant={this.state.navVariant}>
      <Container>
        <Navbar.Brand className={this.state.navBarTitle} href="#home">
          <img src={this.state.navBarLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link><NavLink activeStyle={{color:'#ffd900'}} className={this.state.navbarItem} exact to="/"> Home </NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{color:'#ffd900'}} className={this.state.navbarItem} to="/about"> ABOUT </NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{color:'#ffd900'}} className={this.state.navbarItem} to="/service"> SERVICES </NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{color:'#ffd900'}} className={this.state.navbarItem} to="/courses"> COURSES </NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{color:'#ffd900'}} className={this.state.navbarItem} to="/portfolio"> PORTFOLIO </NavLink></Nav.Link>
            <Nav.Link><NavLink activeStyle={{color:'#ffd900'}} className={this.state.navbarItem} to="/contact"> CONTACT US </NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </Fragment>
    )
  }
}

export default TopNavigation