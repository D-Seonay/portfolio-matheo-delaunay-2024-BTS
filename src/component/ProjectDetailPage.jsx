// ProjectPage.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import projectsData from '../data/projectsData'; // Importez vos données de projet
import { Divider } from '../styles';
import { useTheme } from "./ThemeContext";

// Styles avec styled-components
const ProjectContainer = styled.div`
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProjectImageLink = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

`;

const ProjectImage = styled.img`
  width: 90%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
  z-index: -1;
  filter: brightness(0.5);
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 90vw;
  z-index: 1;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    text-align: start;
    right: 0;
    top: 0;
    padding: 1rem;
    height: 100vh;
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled.h2`
  color : ${props => (props.theme === 'dark' ? '#fff' : '#000')};
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ProjectDescriptionTitleH4 = styled.div`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 80vw;
  }
`;

const ProjectDescriptionText = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProjectDescriptionLink = styled.a`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  z-index: 10;

  &:hover {
    color: #6c757d;
    transition: 0.3s;
    text-decoration: inherit;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 80vw;
  }
`;

const ProjetDate = styled.div`
  color: #6c757d;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 80vw;
  }
`;

const ProjectRole = styled.div`
  color: #6c757d;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 80vw;
  }
`;

const ProjectTech = styled.div`
  color: #6c757d;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 80vw;
  }
`;

const NextProjectPreview = styled(Link)`
  width: 100vw; // Ajustez la taille selon vos besoins
  height: 100vh; // Ajustez la taille selon vos besoins
  position: relative;
  bottom: 0;
  filter: brightness(0.5);
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NextProjectTitle = styled.h2`
  color: #fff;
  font-size: 5rem;
  position: absolute;
`;

const NextProjectDescription = styled.p`
  color: #fff;
  font-size: 1rem;
`;


const buttonLinkGithub = styled(Link)`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  
  &:hover {
    color: #6c757d;
    transition: 0.3s;
    text-decoration: inherit;
  }
`;

const ProjectPage = () => {
	const { id } = useParams(); // Récupérer l'ID de l'URL
	const filteredProjects = projectsData.filter(project => project.id === id); // Filtrer les projets par ID
	let nextProjectIndex = projectsData.findIndex(project => project.id === id) + 1; // Index du prochain projet

	// Rediriger vers le premier projet si l'index du prochain projet est en dehors des limites
	if (nextProjectIndex >= projectsData.length) {
		nextProjectIndex = 0;
	}

	const { theme } = useTheme();

	return (
		<div>
			<ProjectContainer>
				{filteredProjects.map(project => (
					<ProjectImageLink key={project.id} to={`/project/${project.id}`}>
						<ProjectItem>
            <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
              <ProjectImageLink key={project.id} to={`/project/${project.id}`}>
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectImageLink>
              <ProjectDescription>
                
                <ProjectDescriptionTitleH4 theme={theme}>{project.description}</ProjectDescriptionTitleH4>
                <ProjectDescriptionLink theme={theme} href={project ? project.link : ''} target="_blank" rel="noreferrer"> Voir le projet</ProjectDescriptionLink>
                <buttonLinkGithub theme={theme} href={project ? project.linkGithub : ''} target="_blank" rel="noreferrer"> Voir le code source</buttonLinkGithub>


                <ProjetDate>
                  <ProjectDescriptionTitleH4 theme={theme}>Date :</ProjectDescriptionTitleH4>
                  <ProjectDescriptionText theme={theme}>{project.date}</ProjectDescriptionText>
                </ProjetDate>
                <ProjectRole>
                  <ProjectDescriptionTitleH4 theme={theme}>Role :</ProjectDescriptionTitleH4>
                  <ProjectDescriptionText theme={theme}>{project.role}</ProjectDescriptionText>
                </ProjectRole>
                <ProjectTech>
                  <ProjectDescriptionTitleH4 theme={theme}>Technologies :</ProjectDescriptionTitleH4>
                  <ProjectDescriptionText theme={theme}>{project.tech}</ProjectDescriptionText>
                </ProjectTech>


              </ProjectDescription>


            </ProjectItem>

					</ProjectImageLink>
				))}
			</ProjectContainer>
			<Divider />
			<NextProjectPreview to={`/project/${projectsData[nextProjectIndex].id}`}>
				<NextProjectImage src={projectsData[nextProjectIndex].image} alt={projectsData[nextProjectIndex].title} />
				<NextProjectTitle>{projectsData[nextProjectIndex].title}</NextProjectTitle>
			</NextProjectPreview>
		</div>
	);
};

export default ProjectPage;
