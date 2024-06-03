import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Import des fichiers PDF à partir du répertoire public
import ControlConformite1 from '../pdf/2024-DELAUNAY-Matheo-SLAM-1.pdf';
import ControlConformite2 from '../pdf/2024-DELAUNAY-Matheo-SLAM-2.pdf';
import PortefeuilleCompetences from '../pdf/2024-DELAUNAY-Matheo-Portefeuille.pdf';

// Conteneur centré pour le placement des cartes
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // Pour centrer verticalement
  padding: 20px;
`;

// Grille de cartes avec support réactif
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  // Adaptation pour les écrans plus petits
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Style des cartes
const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  min-height: 600px;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const Bts = () => (
  <CenteredContainer>
    <CardGrid>
      <Card href="/bts/veille-technologique">
        <h2>Veille technologique</h2>
        <p>Introduction à la veille technologique.</p>
      </Card>
      <Card href={ControlConformite1} target="_blank" rel="noopener noreferrer">
        <h2>Contrôle de conformité 1</h2>
        <p>Contrôle de conformité n°1 réalisé en BTS.</p>
      </Card>
      <Card href={ControlConformite2} target="_blank" rel="noopener noreferrer">
        <h2>Contrôle de conformité 2</h2>
        <p>Contrôle de conformité n°2 réalisé en BTS.</p>
      </Card>
      <Card href={PortefeuilleCompetences} target="_blank" rel="noopener noreferrer">
        <h2>Portefeuille de compétences</h2>
        <p>Les compétences à acquérir au cours de ma formation.</p>
      </Card>
    </CardGrid>
  </CenteredContainer>
);

export default Bts;
