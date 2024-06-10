import React from 'react';
import './Projects.css'; 
import logo from '../assets/logo.png'; 

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Проекты</h2>
        <div className="project">
          <a href="https://metalltorgcentr.ru/" target="_blank" rel="noopener noreferrer" className="project-button">
            <img src={logo} alt="МеталлТорг Логотип" className="project-logo" />
            ООО "МеталлТорг"
          </a>
          <p>Компания, занимающаяся сбором и переработкой металлолома.</p>
        </div>
        {/* Добавьте больше проектов по необходимости */}
      </div>
    </section>
  );
}

export default Projects;
