import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem ,MDBIcon
  } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/routes';
import PostList from './components/PostList';
import { course } from './components/course';
class App extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
   

 

    return (
     <div>
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">AAC</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={"/news"}>Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Student Area</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!" >Result</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Current Afairs</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Online Test</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Resources</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Batches</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!" >Result</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Current Afairs</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Online Test</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Resources</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem><MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Branches</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!" >Auras</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Miyaganj</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Upcoming</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">About us</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!" >Result</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Current Afairs</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Online Test</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Resources</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={"/news"}>Contact us</MDBNavLink>
            </MDBNavItem>
         
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Sign Up</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Subscribe</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Routes />
    </Router>
   <PostList />
   <course />
     </div>
  

    );
  }
}

export default App;
