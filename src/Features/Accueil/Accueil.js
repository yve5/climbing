import React, { Component } from 'react';
import './Accueil.scss';
import ParallaxImg from '../ParallaxImg/ParallaxImg';

import chausson from './images/chausson.jpg';
import feuille from './images/feuille.jpg';
import lunettes from './images/lunettes.jpg';

import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
 } from 'reactstrap';

class Accueil extends Component {
  constructor(props) {
    super(props);

    this.getLoremIpsum = this.getLoremIpsum.bind(this);
  }

  getLoremIpsum(key) {
    return (
      <p key={key}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  }
  
  render() {
    let collection = [1, 2, 3, 4, 5];
    let fakeContent = collection.map(data => this.getLoremIpsum(data));

    return (
      <div>
        <Row>
          <Col className="col-12 col-md-4 accueil-gutter">
            <Card>
              <CardImg top width="100%" src={lunettes} alt="Card image cap" />
              <CardBody>
                <CardTitle>Entraîments</CardTitle>
                <Button color="primary">Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-12 col-md-4 accueil-gutter">
            <Card>
              <CardImg top width="100%" src={chausson} alt="Card image cap" />
              <CardBody>
                <CardTitle>Adhésion</CardTitle>
                <Button color="warning">Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-12 col-md-4 accueil-gutter">
            <Card>
              <CardImg top width="100%" src={feuille} alt="Card image cap" />
              <CardBody>
                <CardTitle>Fonctionnement</CardTitle>
                <Button color="success">Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {fakeContent}

        <ParallaxImg src={lunettes} alt="lunettes" />

        {fakeContent}

        <ParallaxImg src={chausson} alt="chausson" />
        
        {fakeContent}
      </div>
    );
  }
}

export default Accueil;