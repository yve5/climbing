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
    this.setState({collapse: newValue});

    console.log('hello', this.state.collapse);
  }

  render() {
    return (
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
    );
  }
}

export default App;