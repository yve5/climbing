import React, { Component } from 'react';
import './App.scss';

import Header from './Header/Header';
import Accueil from './Accueil/Accueil';
import Sorties from './Sorties/Sorties';
import Evenements from './Evenements/Evenements';

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
      collapse: true
    };
  }

  handleCollapseChange(newValue) {
    this.setState({ collapse: newValue });
  }

  render() {
    return (
      <div>
        <div className="parallax">
          <div className="parallax__layer parallax__layer--back">
            This is the background.
          </div>
          <div className="parallax__layer parallax__layer--base">
            This is the foreground.
          </div>
        </div>
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