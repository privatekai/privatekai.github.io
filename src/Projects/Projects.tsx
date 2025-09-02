import { useState, useRef, useEffect } from "react"
import projectStyles from "./Projects.module.css"
import Card from "./Card"
import projectsList from "../customisation/projects.json"
import Line from "./line.svg?react"

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const allTags = Array.from(
    new Set(projectsList.flatMap((project) => project.tags))
  )

  const filteredProjects =
    selectedTags.length === 0
      ? projectsList
      : projectsList.filter((p) =>
          selectedTags.some((tag) => p.tags.includes(tag))
        )

  // Tags available to pick (not already selected)
  const availableTags = allTags.filter((tag) => !selectedTags.includes(tag))

  const toggleTag = (tag: string) => {
    setSelectedTags((tags) =>
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]
    )
  }

  // Close dropdown if clicked outside
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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

      {/* Multi-select filter */}
      <div className={projectStyles.filterContainer} ref={dropdownRef}>
        {/* Selected tags bubbles */}
        <div className={projectStyles.selectedTags}>
          {selectedTags.map((tag) => (
            <div key={tag} className={projectStyles.tagBubble}>
              {tag}
              <button
                onClick={() =>
                  setSelectedTags((tags) => tags.filter((t) => t !== tag))
                }
                className={projectStyles.removeTagBtn}
                aria-label={`Remove tag ${tag}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Dropdown button */}
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className={projectStyles.dropdownToggle}
          aria-expanded={dropdownOpen}
          aria-haspopup="listbox"
        >
          Filter Tags ▼
        </button>

        {/* Dropdown list */}
        {dropdownOpen && (
          <ul className={projectStyles.dropdownList} role="listbox">
            {availableTags.length === 0 ? (
              <li className={projectStyles.noTags}>No more tags</li>
            ) : (
              availableTags.map((tag) => (
                <li
                  key={tag}
                  role="option"
                  tabIndex={0}
                  onClick={() => {
                    toggleTag(tag)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleTag(tag)
                    }
                  }}
                  className={projectStyles.dropdownItem}
                >
                  {tag}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <div className={projectStyles.cards}>
        {filteredProjects.map((project, i) => (
          <Card
            key={`${selectedTags.join(",")}-${i}`}
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
