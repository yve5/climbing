import React, { Component } from 'react';
import './App.scss';

import Header from './Features/Header/Header';
import Accueil from './Features/Accueil/Accueil';
import Sorties from './Features/Sorties/Sorties';
import Evenements from './Features/Evenements/Evenements';
import Parallax from './Features/Parallax/Parallax';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import {
  HashRouter,
  Route,
} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);

    this.handleCollapseChange = this.handleCollapseChange.bind(this);

    this.state = {
      collapse: false
    };
  }

  handleCollapseChange(newValue) {
    this.setState({ collapse: newValue });
  }

  render() {
    return (
      <div>
        <Parallax />
        <HashRouter>
          <Container className="App">
            <Row>
              <Col className="col-10 offset-1">
                <Header
                  collapse={this.state.collapse}
                  onCollapseChange={this.handleCollapseChange}
                />
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
      </div>
    );
  }
}

export default App;