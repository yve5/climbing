import React, { Component } from 'react';
import './Accueil.scss';

import chausson from './images/chausson.jpg';
import feuille from './images/feuille.jpg';
import lunettes from './images/lunettes.jpg';

import {
  Alert,
  Jumbotron,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
 } from 'reactstrap';

class Accueil extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-5">Bienvenue sur le site du CLIMBING&nbsp;!</h1>
          <p className="lead">Le Club des Sports Montagne et Escalade</p>
        </Jumbotron>

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

        <p>
          Au CLIMBING, nous souhaitons vous faire découvrir les multiples facettes de l'escalade.
        </p>

        <p>
          En complément de nos entrainements en salle, nous proposons des sorties à la journée en falaise et des stages sur plusieurs jours (escalade et canyonisme). 
        </p>

        <Alert color="success">
          Les inscriptions pour les adultes commenceront au forum des associations au stade Hunebelle le 8 septembre 2018.
          Pour les jeunes, il reste peu de place pour le samedi matin, Contactez-nous par courriel avant de remplir les papiers d'inscription afin de réserver un créneau.
          Le créneau 10-12ans est complet. Vous pouvez cependant nous contacter pour être mis sur liste d'attente pour l'année prochaine. 
          Les documents d'inscription 2018-2019 sont en ligne pour les jeunes et les adultes.
          Pour les réinscriprions, une préinscription n'est pas nécessaire.
        </Alert>

        <p>
          D'autres infos sur la vie du club sont regroupées par là... et vous pouvez également nous retrouver sur le groupe facebook du club pour discuter de l'actualité du club ou organiser vos sorties ! Les documents d'inscriptions sont déja en ligne dans la rubrique Adhésion.
        </p>
      </div>
    );
  }
}

export default Accueil;
