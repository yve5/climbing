import React, { Component } from 'react';
import './App.scss';

import Home from './Home/Home';
import About from './About/About';
import Users from './Users/Users';

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import {
  HashRouter,
  Route,
  Link
  // NavLink
} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);

    this.toggleaze = this.toggleaze.bind(this);

    this.state = {
      dropdownOpen: false,
      isOpen: false
    };
  }

  toggleaze() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <HashRouter>
        <Container className="App">
          <Row>
            <Col>

              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={this.toggleaze} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about" className="nav-link">About</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/users" className="nav-link">Users</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>


              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/users/" component={Users} />
            </Col>
          </Row>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
