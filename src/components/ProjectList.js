import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // Log the projects array for debugging

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Render ProjectItem components for each project in the array */}
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
