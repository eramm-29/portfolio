import React from 'react';
import { projects } from '../../Data';
import ProjectsItem from '../../components/ProjectsItem';
import './projects.css';

const Projects = () => {
  return (
    <section className="projects section">
      <h2 className="section__title">
        My <span>Projects</span>
        </h2>

      <div className="projects__container container grid">
        {projects.map((item) => {
          return <ProjectsItem key={item.id} {...item} />
        })}
      </div>
    </section>
  );
};

export default Projects;