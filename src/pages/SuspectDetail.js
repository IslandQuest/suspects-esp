import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ useNavigate for back navigation
import './SuspectDetails.css';

// Import suspect photos
import diego from '../assets/diego-alvarez.jpg';
import maxine from '../assets/maxine-cho.jpg';
import lucinda from '../assets/lucinda-fontaine.jpg';
import eliot from '../assets/eliot-harper.jpg';
import jordan from '../assets/jordan-hayes.jpg';
import collette from '../assets/collette-marceau.jpg';
import lorenzo from '../assets/lorenzo-moretti.jpg';
import mia from '../assets/mia-ramirez.jpg';
import celeste from '../assets/celeste-winthrop.jpg';

// Import business and dessert photos
import alvarezBusiness from '../assets/churro-explosion-photo.jpg';
import choBusiness from '../assets/waffle-shack-photo.jpg';
import fontaineBusiness from '../assets/simple-sweet-photo.jpg';
import harperBusiness from '../assets/say-cheese-photo.jpg';
import hayesBusiness from '../assets/YoGo-photo.jpg';
import marceauBusiness from '../assets/la-petite-crepe-photo.jpg';
import morettiBusiness from '../assets/cocoa-cove-photo.jpg';
import ramirezBusiness from '../assets/cool-cones-photo.jpg';
import winthropBusiness from '../assets/celestial-cakes-photo.jpg';

import churros from '../assets/churro-photo.jpg';
import waffle from '../assets/waffle-photo.jpg';
import tart from '../assets/tart-photo.jpg';
import cheesecake from '../assets/cheesecake-photo.jpg';
import yogart from '../assets/yogart-photo.jpg';
import crepe from '../assets/crepe-photo.jpg';
import chocolate from '../assets/chocolate-photo.jpg';
import icecream from '../assets/icecream-photo.jpg';
import cake from '../assets/cake-photo.jpg';

const suspects = [
  {
    id: 1,
    nombre: 'Diego Alvarez',
    apodo: 'El Loco',
    fechaNacimiento: '27/01/1985',
    foto: diego,
    negocio: { nombre: 'Churro Explosion', foto: alvarezBusiness },
    postre: { nombre: 'Churro Explosion', foto: churros },
    marcasIdentificatorias: 'Varios tatuajes en el cuello, Orejas perforadas.',
    vehiculo: 'Fiat Dobolo remolcando su carrito de churros',
    motivo: 'El carrito de churros había recibido malas críticas recientemente, y robar el trofeo podría verse como una forma de nivelar la competencia con su rival.',
    coartada: 'Estaba organizando una noche de cine al aire libre en la playa, friendo churros y publicó un video en vivo en las redes sociales durante el momento del robo.',
  },
  {
    id: 2,
    nombre: 'Maxine Cho',
    apodo: 'Max',
    fechaNacimiento: '18/03/1989',
    foto: maxine,
    negocio: { nombre: 'The Waffle Shack', foto: choBusiness },
    postre: { nombre: 'Lava Flow Waffle', foto: waffle },
    marcasIdentificatorias: 'Tatuaje de una huella de pata en la muñeca derecha. Siempre usa su característico lápiz labial rojo.',
    vehiculo: 'Opel Corsa, Amarillo',
    motivo: 'Creía firmemente que la competencia de este año estaba amañada a favor de Totalmente Tropical y es posible que hubiera querido corregir lo que consideraba una injusticia.',
    coartada: 'Estaba trabajando como voluntaria en un evento benéfico, haciendo gofres, y los organizadores del evento pueden confirmar su presencia.',
  },
  {
    id: 3,
    nombre: 'Lucinda Fontaine',
    apodo: 'Lulu',
    fechaNacimiento: '19/01/1981',
    foto: lucinda,
    negocio: { nombre: 'Simple & Sweet', foto: fontaineBusiness },
    postre: { nombre: 'Island Breeze Tart', foto: tart },
    marcasIdentificatorias: 'Tatuaje de naranjas en el hombro izquierdo y cuello, Tatuaje de tortuga en el hombro derecho',
    vehiculo: 'Kia Picanto, blanco con el logo "Simple & Sweet" en el parachoques trasero',
    motivo: 'Lucha en secreto por mantener su negocio a flote y pudo haber planeado vender el trofeo para pagar deudas.',
    coartada: 'Afirma haber pasado la noche sola en la cocina de su tienda preparando tartas, sin saber que el trofeo fue robado.',
  },
  {
    id: 4,
    nombre: 'Eliot Harper',
    apodo: 'The Big Cheese',
    fechaNacimiento: '03/11/1968',
    foto: eliot,
    negocio: { nombre: 'Say Cheese-Cake', foto: harperBusiness },
    postre: { nombre: 'Tropical Tango Cheesecake', foto: cheesecake },
    marcasIdentificatorias: 'Gafas, Bigote de manillar, Sin tatuajes',
    vehiculo: 'Bicicleta, Azul océano',
    motivo: 'Cree que la fama de Tropical Treats es injusta y que su marketing difundió rumores para perjudicar su pastelería. Robar el trofeo pudo ser una forma de enviar un mensaje.',
    coartada: 'Afirma haber estado en un ferry hacia Fuerteventura con su esposa durante el momento del robo.',
  },
  {
    id: 5,
    nombre: 'Jordan Hayes',
    apodo: 'Jay',
    fechaNacimiento: '09/11/1998',
    foto: jordan,
    negocio: { nombre: 'YoGo Island', foto: hayesBusiness },
    postre: { nombre: 'Pineapple Paradise Bowl', foto: yogart },
    marcasIdentificatorias: 'Tatuaje que cubre el cuello, Piercing en la nariz',
    vehiculo: 'Ninguno',
    motivo: 'Fue rechazado de la competencia el año pasado y guarda rencor. Decía que sin el trofeo no habría competencia futura.',
    coartada: 'Dice haber estado en Alfies Beach Bar participando en trivia, y fue visto celebrando por varias personas toda la noche.',
  },
  {
    id: 6,
    nombre: 'Collette Marceau',
    apodo: 'Coco',
    fechaNacimiento: '13/02/1991',
    foto: collette,
    negocio: { nombre: 'La Petite Crêperie', foto: marceauBusiness },
    postre: { nombre: 'Mango Paradise Crêpe', foto: crepe },
    marcasIdentificatorias: 'Tatuaje de un pastel en la mano izquierda, Tatuaje de flores en la muñeca izquierda',
    vehiculo: 'Bicicleta verde claro con canasto delantero',
    motivo: 'Se sabe que tiene celos del éxito de Tropical Treats. Robar el trofeo podría ser una forma de dañar su reputación y atraer clientes.',
    coartada: 'Afirma haber estado en su puesto de crêpes, pero no recuerda si trabajando o en pausa de café durante el robo.',
  },
  {
    id: 7,
    nombre: 'Lorenzo Moretti',
    apodo: 'El Rey del Chocolate',
    fechaNacimiento: '30/05/1978',
    foto: lorenzo,
    negocio: { nombre: 'Cocoa Cove', foto: morettiBusiness },
    postre: { nombre: 'Cocoa Cascade', foto: chocolate },
    marcasIdentificatorias: 'Tatuaje de "La Vita è Dolce" en el antebrazo derecho',
    vehiculo: 'Audi R8, Azul oscuro',
    motivo: 'Cree que sus postres son igual de buenos o mejores, y pudo haber robado el trofeo para demostrar su talento.',
    coartada: 'Afirma haber organizado un evento privado de degustación en Cocoa Cove, con empleados que pueden confirmar su presencia.',
  },
  {
    id: 8,
    nombre: 'Mia Ramirez',
    apodo: 'Scoops',
    fechaNacimiento: '18/07/1996',
    foto: mia,
    negocio: { nombre: 'Cool Cones', foto: ramirezBusiness },
    postre: { nombre: 'Sunset Swirl', foto: icecream },
    marcasIdentificatorias: 'Cicatriz pequeña en el labio superior, Piercing en la nariz, Sin tatuajes',
    vehiculo: 'Citroën Berlingo, Rojo',
    motivo: 'Se sentía opacada por el éxito de Tropical Treats y resentía las comparaciones constantes. Robar el trofeo pudo haber sido una forma de atraer atención a Cool Cones.',
    coartada: 'Dice que estaba filmando un video promocional de su nuevo helado "Tropical Tastes" afuera de su tienda. Si el video tiene marca de tiempo, podría probar su inocencia.',
  },
  {
    id: 9,
    nombre: 'Celeste Winthrop',
    apodo: 'Winner',
    fechaNacimiento: '24/06/1988',
    foto: celeste,
    negocio: { nombre: 'Celestial Cakes', foto: winthropBusiness },
    postre: { nombre: 'Tropical Elegance Cake', foto: cake },
    marcasIdentificatorias: 'Múltiples tatuajes en los hombros, Siempre usa una boina verde',
    vehiculo: 'BMW Serie 4 Convertible, Blanco',
    motivo: 'Había ganado el premio tres años seguidos y se enfureció públicamente al perderlo frente a Tropical Treats.',
    coartada: 'Estaba en un mercado agrícola comprando frutas, y tiene recibos con marcas de tiempo durante el robo.',
  },
];


const SuspectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Hook to navigate programmatically
  const suspect = suspects.find(s => s.id === parseInt(id));

  if (!suspect) return <div>Suspect not found</div>;

  return (
    <div className="dossier-container">
      {/* ✅ Back button */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Volver
      </button>
  
      <div className="dossier-header">
        <h1>Dossier de Sospechoso</h1>
        <h2>{suspect.nombre}</h2>
        <p className="nickname">Alias: <span>{suspect.apodo}</span></p>
      </div>
  
      <div className="dossier-body">
        <div className="left-panel">
          <div className="photo-card">
            <img src={suspect.foto} alt={`${suspect.nombre}`} />
            <p>Foto del Sospechoso</p>
          </div>
          <div className="photo-card">
            <img src={suspect.negocio.foto} alt="Negocio" />
            <p>{suspect.negocio.nombre}</p>
          </div>
          <div className="photo-card">
            <img src={suspect.postre.foto} alt="Postre" />
            <p>{suspect.postre.nombre}</p>
          </div>
        </div>
  
        <div className="right-panel">
          <p><strong>Fecha de Nacimiento:</strong> {suspect.fechaNacimiento}</p>
          <p><strong>Marcas Identificatorias:</strong> {suspect.marcasIdentificatorias}</p>
          <p><strong>Vehiculo:</strong> {suspect.vehiculo}</p>
          <p><strong>Motivo:</strong> {suspect.motivo}</p>
          <p><strong>Coartada:</strong> {suspect.coartada}</p>
        </div>
      </div>
      </div> 
  );
};

export default SuspectDetail;