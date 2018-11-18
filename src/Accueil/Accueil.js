import React, { Component } from 'react';
import './Accueil.scss';

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
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Entraîments</CardTitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-12 col-md-4 accueil-gutter">
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Adhésion</CardTitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-12 col-md-4 accueil-gutter">
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fonctionnement</CardTitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <p>
          Au CLIMBING, nous souhaitons vous permettre de découvrir les multiples facettes de l'escalade, en particulier sur sites naturels.
        </p>

        <p>
          Ainsi, en complément de nos entrainements en salle, nous proposons, tout au long de l'année, sorties à la journée en falaise et à Fontainebleau pour le bloc, week-ends et stages sur plusieurs jours (escalade et canyonisme). 
        </p>

        <Alert color="success">
          Les inscriptions pour les adultes commencencerons au forum des associations au stade hunebelle le 8 Septembre 2018.
          Pour les jeunes il reste actuellement peu de place pour le samedi matin, Contactez-nous par mail avant de remplir les papiers d'inscription afin de réserver un créneau.
          Le créneau 10-12ans est complet , cependant vous pouvez nous contacter pour etre mis sur liste d'attente pour l'année prochaine. 
          Les documents d'inscription 2018 2019 sont en ligne pour les jeunes et les adultes.
          Pour les réinscriprions, pas besoin de se préinscrire.
        </Alert>

        <p>
          D'autres infos sur la vie du club sont regroupées par là... et vous pouvez également nous retrouver sur le groupe facebook du club pour discuter de l'actualité du club ou organiser vos sorties à Bleau ! Les documents d'inscriptions sont déja en ligne dans la rubrique Adhésion.
        </p>
      </div>
    );
  }
}

export default Accueil;
