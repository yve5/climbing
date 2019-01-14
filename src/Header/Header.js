import React, { Component } from 'react';
import './Header.scss';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';

import {
  Link,
} from "react-router-dom";



class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.props.onCollapseChange(!this.props.collapse);
  }
  
  render() {
    return (
      <div>
        <div class="Hello">
          Hello World !!!
        </div>
        
        <Navbar color="light navbar-gutter" light expand="md">
          <NavbarBrand>CLIMBING</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.props.collapse} navbar>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;