import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

// Import images from src/assets
import diego from '../assets/diego-alvarez.jpg';
import maxine from '../assets/maxine-cho.jpg';
import lucinda from '../assets/lucinda-fontaine.jpg';
import eliot from '../assets/eliot-harper.jpg';
import jordan from '../assets/jordan-hayes.jpg';
import collette from '../assets/collette-marceau.jpg';
import lorenzo from '../assets/lorenzo-moretti.jpg';
import mia from '../assets/mia-ramirez.jpg';
import celeste from '../assets/celeste-winthrop.jpg';
import agencylogo from '../assets/agency-logo.png';

const suspects = [
  { id: 1, name: 'Diego Alvarez', photo: diego },
  { id: 2, name: 'Maxine Cho', photo: maxine },
  { id: 3, name: 'Lucinda Fontaine', photo: lucinda },
  { id: 4, name: 'Eliot Harper', photo: eliot },
  { id: 5, name: 'Jordan Hayes', photo: jordan },
  { id: 6, name: 'Collette Marceau', photo: collette },
  { id: 7, name: 'Lorenzo Moretti', photo: lorenzo },
  { id: 8, name: 'Mia Ramirez', photo: mia },
  { id: 9, name: 'Celeste Winthrop', photo: celeste }
];

const Home = () => (
  <div
    className="home-page"
    >
    {/* Island Detectives Banner */}
    <div className="banner">
      <img src={agencylogo} alt="Island Detectives Logo" />
    </div>

      {/* Case Details */}
    <div className="case-details">
      <h2>Caso: Robo del trofeo</h2>
      <p><strong>Location:</strong> Heladería Totalmente Tropical</p>
      <p><strong>Fecha:</strong> 10/02/25</p>
      <p><strong>Hora:</strong> 20:30</p>
    </div>

    <h1>Base de Datos de Sospechosos</h1>
    <p className="intro">Haga clic en un sospechoso a continuación para ver el perfil detallado.</p>

    {/* Suspect Cards */}
    <div className="suspects-container">
      {suspects.map(suspect => (
        <Link to={`/suspect/${suspect.id}`} key={suspect.id}>
          <div className="suspect-card">
            <div className="suspect-photo">
              <img src={suspect.photo} alt={suspect.name} />
            </div>
            <div className="suspect-info">
              <h3>{suspect.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
