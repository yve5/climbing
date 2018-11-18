import React, { Component } from 'react';
import './Evenements.scss';

class Evenements extends Component {
  render() {
    return (
      <div>
        <h2>Évènements & animations</h2>
        <p>
          Au CLIMBING, le partage dans la bonne humeur de nos activités favorites est primordial.
          <br />
          C'est pourquoi nous organisons différents évènements tout au long de l'année pour vous faire découvrir les multiples facettes de la grimpe et partager notre passion :
          <ul>
            <li>participation au Téléthon avec l'installation d'une décente en rappel le long du centre administratif de Clamart,</li>
            <li>soirées vidéos avec projection de films de grimpe,</li>
            <li>challenge à thème,</li>
            <li>stages et séjours...</li>
          </ul>
        </p>

        <h2>Compétitions</h2>
        <p>
          Les jeunes peuvent participer aux compétitions départementales benjamins, minimes, cadets ou junior et peuvent ainsi être sélectionnés pour les compétitions régionales, voire inter-régionales puis nationales.
          <br />
          Un condensé des règles officielles pour les compétitions FFME est disponible ici.
        </p>
      </div>
    );
  }
}

export default Evenements;
