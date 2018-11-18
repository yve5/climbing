import React, { Component } from 'react';
import './Sorties.scss';

class Sorties extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <h2>Calendrier des sorties escalade 2018 / 2019</h2>
        <p>
          Les sorties ne sont jamais annulées, si besoin, nous changeons 
          de destination en fonction de la météo. 
          <br />
          Toutes les sorties sont encadrées par des moniteurs diplômés.
        </p>

        <h2>Sorties en sites naturels</h2>
        <p>
          L'escalade ne se pratique pas que sur de la résine! Pour découvrir les multiples facettes de cette activité, le mieux est de grimper le plus souvent possible sur du rocher... et toutes les roches permettent des préhensions différentes et donc une escalade différente.
        </p>

        <p>
          Pour cette raison, le CLIMBING organise une sortie en site naturel chaque mois ainsi que plusieurs week-end et stages dans l'année:

          <ul>
            <li>Sorties en falaises</li>
            <li>Sorties bloc</li>
            <li>Week-end et stages d'escalade</li>
          </ul>
        </p>

        <p>
          Les sorties sont maintenues quelle que soit la météo (changement de destination si besoin).
        </p>

        <p>
          Les sorties se font généralement avec un car ou par co-voiturage.
        </p>

        <p>
          Les départs et les retours se font toujours place Ferrari à CLAMART (heure donnée à titre indicatif):
          <ul>
            <li>Départ à 9H00, retour vers 18H00 pour les sorties à Fontainebleau.</li>
            <li>Départ à 8H00, retour vers 20H00 pour les sorties en falaise.</li>
          </ul>
        </p>

        <p>
          Les participants doivent être munis de vêtements adaptés à l'activité et à la saison, notamment de chaussures de randonnée, de vêtements chauds et imperméables. Ils doivent également prévoir leur repas de midi (pique-nique),boissons en quantité suffisante (au minimum 1 litre), et leur matériel personnel d'escalade (Voir la page " sécurité et matériel ").
        </p>

        <h2>Sorties à Fontainebleau</h2>
        <p>
          À titre indicatif, elles ont lieu en Novembre, décembre, Janvier et Février.
          <br />
          Le lieu exact est déterminé le matin même en fonction du temps.
          <br />
          Pour le bloc, il faut prévoir chaussons, magnésie et crash-pad (si vous en avez un). 
          <br />
          Le pic-nic n'est pas fourni par le club pour ces sorties. 
        </p>

        <h2>Sorties en falaises</h2>
        <p>
          Elles ont généralement lieu en Octobre, Mars, Avril et Juin.
          <br />
          Un week-end en camping est organisé en mai pour les jeunes. Pour les adultes, un ou deux week-ends avec hébergement en camping ou en gîte sont organisés. 
        </p>

        <p>
          Les sites choisis sont le plus souvent en Bourgogne (Cormot, Vieux Château, Le Saussois, Saffres...), mais d'autres sites d'escalade en Normandie (Clécy), en Champagne (Vertus) ou en Mayenne (Saulges) font également parti sites visités lors des sorties.
        </p>

        <p>
          Attention ! Le port du casque est obligatoire en falaise. Il est fourni par le Club (merci d'apporter le vôtre, si vous en possédez un).
        </p>

        <h2>Sorties sur plusieurs jours</h2>
        <p>
          La section organise aussi ponctuellement des sorties sur plusieurs jours qui vont du simple week-end en montagne à des stages de perfectionnement en France ou à l'étranger et propose des stages et des séances d'initiation à diverses activités (via ferrata, glacier, canyonisme...).
          <br />
          Les conditions de participation (âge, niveau…) sont fixées au cas par cas.
        </p>

        <h2>Participation aux frais et organisation</h2>
        <p>
          Les sorties sur une journée sont gratuites, le club prend en charge les frais de transport par car et rembourse les frais d'essence et de péage dans les cas où un co-voiturage doit être organisé.
        </p>

        <p>
          Chaque participant apporte son pique-nique mais les gâteaux maisons sont toujours appréciés et permettent de partager un moment convivial 
        </p>

        <p>
          Pour les sorties sur plusieurs jours, les participants contribuent aux frais de repas et d'hébergement : à titre indicatif, en 2018, la participation demandée par personne lors du WE adultes de 5 jours à la Jonte (hébergement en gîte, repas, transport et encadrement compris) était de 200&euro;.
        </p>
      </div>
    );
  }
}

export default Sorties;
