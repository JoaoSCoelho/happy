import { Link } from 'react-router-dom';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanagesMap.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={ mapMarkerImg } alt="Happy" />

          <h2>Escola um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :</p>
        </header>

        <footer>
          <strong>Mairi</strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <div>oi</div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;