import { useState } from "react"
/// <reference types="vite-plugin-svgr/client" />
import Card from "./Card"
import projectStyles from "./Projects.module.css"
import Line from "./line.svg?react"

import projectsList from "../customisation/projects.json"

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All")

  // Get unique tags from projects
  const allTags = Array.from(
    new Set(projectsList.flatMap(project => project.tags))
  )
  const tags = ["All", ...allTags]

  // Filtered projects based on tag
  const filteredProjects =
    selectedTag === "All"
      ? projectsList
      : projectsList.filter(project => project.tags.includes(selectedTag))

  console.log(selectedTag)
  console.log(filteredProjects)

  return (
    <div className={projectStyles.projects}>
      <div className={projectStyles.titleWrapper}>
        <h1 className={projectStyles.title}>
          <span>What have I been up to?</span>
          <div className={projectStyles.lineContainer}>
            <Line className={projectStyles.line} />
          </div>
        </h1>
      </div>
      <p className={projectStyles.info}>
        Here are some examples of my work.
        <br />
        <span className={projectStyles.help}>(Click on a card to open its link)</span>
      </p>

      {/* Tag filter buttons */}
      <div className={projectStyles.filterBar}>
        {tags.map(tag => (
          <button
            key={tag}
            className={`${projectStyles.filterButton} ${selectedTag === tag ? projectStyles.active : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className={projectStyles.cards}>
        {filteredProjects.map((project, i) => (
          <Card
            key={`${selectedTag}-${i}`} 
            name={project.name}
            date={project.date}
            description={project.description}
            url={project.url}
            image={project.image}
            tags={project.tags}
            index={filteredProjects.length - i}
          />
        ))}
      </div>
    </div>
  )
}
