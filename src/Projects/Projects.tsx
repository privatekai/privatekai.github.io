/// <reference types="vite-plugin-svgr/client" />
import Card from "./Card"
import projectStyles from "./Projects.module.css"
import Line from "./line.svg?react"

import projectsList from "../customisation/projects.json"

export default function Projects() {
  return (
    <div className={projectStyles.projects}>
      <div className={projectStyles.titleWrapper}>
        <h1 className={projectStyles.title}>
          <span>Projects</span>
          <div className={projectStyles.lineContainer}>
            <Line className={projectStyles.line} />
          </div>
        </h1>
      </div>
      <p className={projectStyles.info}>
        Here are some of the projects I've worked on.
        <br />
        <span className={projectStyles.help}>(Click on a project's title to open it)</span>
      </p>
      <div className={projectStyles.cards}>
        {projectsList.map((project, i) => (
          <Card
            name={project.name}
            date={project.date}
            description={project.description}
            url={project.url}
            image={project.image}
            tags={project.tags}
            index={projectsList.length - i}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
