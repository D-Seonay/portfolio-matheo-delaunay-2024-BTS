import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // Pour centrer verticalement sur toute la hauteur de la page
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

    @media (max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 50px 0;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 50px;
        margin: 50px 0;
    }
`;

const Card = styled(Link)`
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
      <Card href="/topic1" target="_blank">
        <h2>Veille technologique</h2>
        <p>Introduction à la veille technologique.</p>
      </Card>
      <Card to="/topic2">
        <h2>Portefeuille de compétences</h2>
        <p>Les compétences à acquérir au cours de ma formation.</p>
      </Card>
      <Card to="/topic3">
        <h2>Contrôle de conformité 1</h2>
        <p>Comment réaliser un contrôle de conformité.</p>
      </Card>
      <Card to="/topic4">
        <h2>Contrôle de conformité 2</h2>
        <p>Comment utiliser la veille technologique.</p>
      </Card>
    </CardGrid>
  </CenteredContainer>
);

export default Bts;
