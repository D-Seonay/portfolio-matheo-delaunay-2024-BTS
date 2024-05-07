import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'; 


// Importation des images pour la page
import LogoNothing from '../img/veille-technologique/logo-nothing.png';
import NothingEar1 from '../img/veille-technologique/nothing-ear-(1).png';
import NothingPhone1 from '../img/veille-technologique/nothing-phone-(1).webp';
import NothingEarStick from '../img/veille-technologique/nothing-ear-(stick).webp';
import NothingEar2 from '../img/veille-technologique/nothing-ear-(2).png';

import { FaArrowAltCircleUp } from "react-icons/fa";


// Conteneur principal de la page
const PageContainer = styled.div`
  max-width: 1200px; // Largeur maximale de la page
  margin: 0 auto; // Centre la page horizontalement
  padding: 20px; // Espace autour du contenu
  font-family: 'Arial', sans-serif; // Police de base
  background: rgba(255, 255, 255, 0.7); // Fond avec transparence
`;

// Titre principal de la page
const PageTitle = styled.h1`
  font-size: 3rem; // Taille du titre
  text-align: center; // Centre le texte
  margin-bottom: 40px; // Espace sous le titre
`;

// Navigation interne pour la page
const Navigation = styled.nav`
  position: sticky; // Navigation fixée en haut
  display: flex; // Affichage en ligne
  justify-content: space-around; // Espace égal entre les éléments
  width: 100%; // Largeur de la navigation
  top: 0;
  background: rgba(255, 255, 255, 0.9); // Transparence pour la navigation
  padding: 10px; // Espace interne
  z-index: 10; // Assure que la navigation reste au-dessus des autres éléments

  // Réactivité pour les écrans plus petits
  @media (max-width: 768px) {
    flex-direction: column; // Colonne sur les petits écrans
    align-items: center; // Centrer horizontalement
  }
`;

const NavLink = styled(ScrollLink)`
  color: #191919; // Couleur des liens
  text-decoration: none; // Pas de soulignement
  margin-right: 20px; // Espace entre les liens
  text-decoration: none; // Pas de soulignement
  transition: text-decoration 0.3s ease-in-out; // Transition douce
  &:hover {
    color: #333; // Couleur sur hover
    text-decoration: underline; // Soulignement sur hover
  }

  // Réactivité pour les écrans plus petits
  @media (max-width: 768px) {
    margin: 10px 0; // Espace autour des liens
  }
`;

// Section pour chaque produit ou sujet
const Section = styled.div`
  margin: 40px 0; // Espace autour de la section
  padding-top: 60px; // Espace supplémentaire pour la navigation fixe
`;

// Titre de section
const SectionTitle = styled.h2`
  font-size: 2rem; // Taille du titre de section
  text-align: left; // Alignement du texte
  color: #333; // Couleur du texte
`;

// Description de section
const SectionDescription = styled.p`
  font-size: 1.2rem; // Taille de la description
  line-height: 1.5; // Espacement entre les lignes
  color: #555; // Couleur du texte
  text-align: justify; // Justifier le texte
  display: flex; // Afficher le texte en ligne
  flex-direction: column;
  align-items: center; // Centrer horizontalement
`;

// Image de section
const SectionImage = styled.img`
  justify-content: center; // Centrer horizontalement
  max-width: 25%; // Taille de l'image
  border-radius: 10px; // Coins arrondis
`;

// Grille pour afficher plusieurs éléments
const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Deux colonnes
  gap: 20px; // Espace entre les cartes

  // Réactivité pour les écrans plus petits
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Une colonne sur les petits écrans
  }
`;

// Carte pour afficher des produits ou des images
const Card = styled.div`
  background: rgba(255, 255, 255, 0.6); // Fond semi-transparente
  backdrop-filter: blur(10px); // Effet de flou
  border-radius: 10px; // Coins arrondis
  border: 1px solid rgba(255, 255, 255, 0.2); // Bordure légère
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Ombre
  padding: 20px; // Espace interne
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s; // Transition douce

  &:hover {
    transform: scale(1.05); // Effet de zoom sur hover
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); // Ombre plus grande sur hover
  }
`;

// Image dans les cartes
const CardImage = styled.img`
  max-width: 100%; // L'image prend toute la largeur
  border-top-left-radius: 10px; // Coins arrondis
  border-top-right-radius: 10px; // Coins arrondis
`;

// Titre dans les cartes
const CardTitle = styled.h3`
  font-size: 1.5rem; // Taille du titre
  color: #333; // Couleur du texte
  margin-top: 20px; // Espace au-dessus du titre
`;

// Description dans les cartes
const CardDescription = styled.p`
  font-size: 1rem; // Taille de la description
  color: #666; // Couleur du texte
  text-align: justify; // Justifier le texte
`;

// Composant pour les sources
const SourcesSection = styled.div`
  margin: 40px 0; // Espace autour de la section
  padding: 20px; // Espace interne
  background: rgba(255, 255, 255, 0.7); // Fond semi-transparent
  border-radius: 10px; // Coins arrondis
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Ombre légère
`;

// Titre de la section des sources
const SourcesTitle = styled.h2`
  font-size: 2rem; // Taille du titre
  color: #333; // Couleur du texte
  text-align: left; // Alignement du texte
`;

// Liens vers les sources
const SourceLink = styled.a`
  color: #191919; // Couleur des liens
  text-decoration: none; // Pas de soulignement
  transition: color 0.3s; // Transition douce

  &:hover {
    color: #33A; // Couleur sur hover
  }
`;

// Conteneur pour les sources
const SourceList = styled.ul`
  list-style: none; // Pas de puces
  padding: 0; // Pas de marge
  margin: 0; // Pas de marge
`;

const SourceItem = styled.li`
  margin-bottom: 10px; // Espace entre les éléments
`;

// Bouton de défilement vers le haut
const ScrollToTopButton = styled(ScrollLink)`
  display: flex; // Affichage en ligne
  justify-content: center; // Centrer horizontalement
  position: fixed; // Fixe le bouton
  bottom: 50px; // Position du bas
  right: 20px; // Position de droite
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #000;
  padding: 10px 10px; // Espace interne
  border-radius: 50px; // Bouton arrondi
  text-align: center; // Centre le texte
  text-decoration: none; // Pas de soulignement
  font-size: 1.2rem; // Taille du texte
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Ombre légère
  transition: background-color 0.3s, transform 0.3s; // Transition douce
  z-index: 1000; // Assure que le bouton reste au-dessus des autres éléments

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const Sources = () => (
  <SourcesSection>
    <SourcesTitle>Sources pour en savoir plus sur Nothing :</SourcesTitle>
    <SourceList>
      <SourceItem>
        <strong>Site Web officiel de Nothing : </strong> 
        <SourceLink href="https://us.nothing.tech/" target="_blank" rel="noopener noreferrer">
          https://us.nothing.tech/
        </SourceLink>
      </SourceItem>
      <SourceItem>
        <strong>Produits Nothing : </strong>
        <ul>
          <li>
            <strong>Nothing ear (1) : </strong> 
            <SourceLink href="https://us.nothing.tech/products/ear-1" target="_blank" rel="noopener noreferrer">
              https://us.nothing.tech/products/ear-1
            </SourceLink>
          </li>
          <li>
            <strong>Nothing Phone (1) : </strong> 
            <SourceLink href="https://us.nothing.tech/pages/phone-1" target="_blank" rel="noopener noreferrer">
              https://us.nothing.tech/pages/phone-1
            </SourceLink>
          </li>
          <li>
            <strong>Nothing ear (stick) : </strong> 
            <SourceLink href="https://us.nothing.tech/products/ear-stick" target="_blank" rel="noopener noreferrer">
              https://us.nothing.tech/products/ear-stick
            </SourceLink>
          </li>
        </ul>
      </SourceItem>
      <SourceItem>
        <strong>Intégration de ChatGPT : </strong>
        <ul>
          <li>
            <strong>Article sur l'intégration de ChatGPT dans Nothing Phone (1) : </strong> 
            <SourceLink href="https://twitter.com/nextpitCOM/status/1787105234998743066" target="_blank" rel="noopener noreferrer">
              https://twitter.com/nextpitCOM/status/1787105234998743066
            </SourceLink>
          </li>
        </ul>
      </SourceItem>
      <SourceItem>
        <strong>Informations complémentaires : </strong>
        <ul>
          <li>
            <strong>Article sur l'histoire et la philosophie de Nothing : </strong>
            <SourceLink href="https://www.crunchbase.com/organization/nothing-4537" target="_blank" rel="noopener noreferrer">
              https://www.crunchbase.com/organization/nothing-4537
            </SourceLink>
          </li>
          <li>
            <strong>Revue du Nothing Phone (1) : </strong>
            <SourceLink href="https://www.gsmarena.com/nothing_phone_1-review-2453.php" target="_blank" rel="noopener noreferrer">
              https://www.gsmarena.com/nothing_phone_1-review-2453.php
            </SourceLink>
          </li>
        </ul>
      </SourceItem>
    </SourceList>
  </SourcesSection>
);

// Composant principal pour la page de veille technologique

const NothingOverview = () => (
  <PageContainer id="page-top">
    <PageTitle>Une plongée immersive dans l'univers de Nothing</PageTitle>

    {/* Navigation interne */}
    <Navigation>
      <NavLink 
        to="section-presentation"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-70}
      >

        Présentation
      </NavLink>
      <NavLink 
        to="section-products"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-70}
      >
        Produits
      </NavLink>
      <NavLink
        to="section-earphones"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-70}
      >
        Écouteurs

      </NavLink>
      <NavLink
        to="section-philosophy"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-70}
      >
        Philosophie
      </NavLink>
      <NavLink
        to="section-partnership"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-70}
      >
        Partenariat
      </NavLink>
      <NavLink
        to="section-sources"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-70}
      >
        Sources
      </NavLink>
    </Navigation>

    <Section id="section-presentation">
      <SectionTitle>Présentation de Nothing</SectionTitle>
      <SectionDescription>
        Nothing, fondée en 2021 par Carl Pei, co-fondateur de OnePlus, a suscité un grand intérêt dans le monde de la technologie grand public en peu de temps. Dès ses débuts, la marque s'est démarquée par son esthétique minimaliste et transparente, son expérience utilisateur intuitive, et ses prix abordables.
        <SectionImage src={LogoNothing} alt="Nothing Logo" />
      </SectionDescription>
    </Section>

    <Section id="section-products">
      <SectionTitle>Les produits Nothing</SectionTitle>
      <SectionGrid>
        <Card>
          <CardImage src={NothingEar1} alt="Nothing ear (1)" />
          <CardTitle>Nothing ear (1)</CardTitle>
          <CardDescription>
            Les écouteurs sans fil Nothing ear (1) ont captivé par leur design transparent et leur qualité sonore. Ils offrent l'annulation active du bruit, des commandes tactiles, et une autonomie de 5 heures.
          </CardDescription>
        </Card>

        <Card>
          <CardImage src={NothingPhone1} alt="Nothing Phone (1)" />
          <CardTitle>Nothing Phone (1)</CardTitle>
          <CardDescription>
            Le Nothing Phone (1) se démarque par son interface Glyph innovante et son design transparent. Il propose un écran OLED de 6,55 pouces, des caméras de haute qualité, et une batterie de 4500 mAh. 
          </CardDescription>
        </Card>
      </SectionGrid>
    </Section>

    <Section id="section-earphones">
      <SectionTitle>Les écouteurs Nothing</SectionTitle>
      <SectionGrid>
        <Card>
          <CardImage src={NothingEarStick} alt="Nothing ear (stick)" />
          <CardTitle>Nothing ear (stick)</CardTitle>
          <CardDescription>
            Les écouteurs Nothing ear (stick) reprennent le design transparent emblématique tout en l'épurant. Leur format compact, leur qualité sonore irréprochable, et leur autonomie satisfaisante en font un compagnon idéal pour une écoute nomade.
          </CardDescription>
        </Card>
        
        <Card>
          <CardImage src={NothingEar2} alt="Nothing ear (2)" />
          <CardTitle>Nothing ear (2)</CardTitle>
          <CardDescription>
            Les écouteurs Nothing ear (2) offrent une expérience sonore encore plus riche avec un design transparent. Ils sont équipés de fonctionnalités avancées telles que des microphones haute définition et une commande intuitive.
          </CardDescription>
        </Card>
      </SectionGrid>
    </Section>

    <Section id="section-philosophy">
      <SectionTitle>Philosophie de Nothing</SectionTitle>
      <SectionDescription>
        La philosophie de Nothing comprend la durabilité, avec des matériaux recyclés utilisés dans ses produits et des emballages conçus à partir de matériaux durables. La marque encourage une communauté active et impliquée.
      </SectionDescription>
    </Section>

    <Section id="section-partnership">
      <SectionTitle>Partenariat avec ChatGPT</SectionTitle>
      <SectionDescription>
        L'intégration de ChatGPT dans les produits Nothing marque une étape importante dans la vision de la marque. Cela ouvre la voie à de nombreuses innovations futures, repoussant les limites de l'interaction homme-machine.
      </SectionDescription>
    </Section>

    <Section id="section-sources">
      <Sources />
    </Section>
    {/* Bouton de défilement vers le haut */}
    <ScrollToTopButton
      to="page-top" // Cible pour défiler en haut de la page
      smooth={true}
      duration={500} // Durée du défilement
    >
      <FaArrowAltCircleUp />
    </ScrollToTopButton>
  </PageContainer>
);

export default NothingOverview;
