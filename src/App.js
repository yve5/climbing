import React, { Component } from 'react';
import './App.scss';

import Accueil from './Accueil/Accueil';
import Sorties from './Sorties/Sorties';
import Evenements from './Evenements/Evenements';

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

import {
  HashRouter,
  Route,
  Link
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
            <Col className="col-10 offset-1">

              <Navbar color="light navbar-gutter" light expand="md">
                <NavbarBrand href="/">CLIMBING</NavbarBrand>
                <NavbarToggler onClick={this.toggleaze} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/" className="nav-link">Accueil</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/sorties" className="nav-link">Sorties</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/evenements" className="nav-link">Évènements</Link>
                    </NavItem>
                    {/*<UncontrolledDropdown nav inNavbar>
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
                    </UncontrolledDropdown>*/}
                  </Nav>
                </Collapse>
              </Navbar>

            </Col>
          </Row>
          <Row>
            <Col className="col-10 offset-1">
              <Route path="/" exact component={Accueil} />
              <Route path="/sorties/" component={Sorties} />
              <Route path="/evenements/" component={Evenements} />
            </Col>
          </Row>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
