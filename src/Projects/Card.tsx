import React, { useEffect, useState } from "react"
import cardStyles from "./Card.module.css"

interface ImageFile {
  default: string
}

const imagesModule = import.meta.glob<ImageFile>("../customisation/images/*", { eager: true })

interface Project {
  name: string
  date: string
  description: string
  url: string
  image: string
  tags: string[]
  index: number
}

export default function Card(props: Project) {
  const [visible, setVisible] = useState(false)

  const imageURL =
    imagesModule[`../customisation/images/${props.image}`]?.default ?? ""

  useEffect(() => {
    setVisible(false)
    const delay = props.index * 100
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [props.index])


  return (
    <div
      className={`${cardStyles.card} ${visible ? cardStyles.visible : cardStyles.hidden}`}
      style={{ "--order": props.index, zIndex: props.index } as React.CSSProperties}
    >
      <div className={cardStyles.date}>{props.date}</div>
      <h2 className={cardStyles.name}>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.name}
        </a>
      </h2>
      <div className={cardStyles.imageWrapper}>
        <a href={props.url} target="_blank" rel="noreferrer">
          {imageURL && <img src={imageURL} alt={props.name} className={cardStyles.image} />}
        </a>
      </div>
      <div className={cardStyles.tagsAndDescriptionWrapper}>
        <div className={cardStyles.description}>{props.description}</div>
        <div className={cardStyles.tags}>
          {props.tags.map(tag => (
            <span className={cardStyles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
