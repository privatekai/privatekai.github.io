import cardStyles from "./Card.module.css"

import React from "react"

interface ImageFile {
  default: string
}

const imagesModule = import.meta.glob<ImageFile>("../customisation/images/*")

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
  //load the image from its path
  const [imageURL, setImageURL] = React.useState("")
  imagesModule[`../customisation/images/${props.image}`]().then(image => setImageURL(image.default))

  return (
    <div
      className={`${cardStyles.card} hidden`}
      // @ts-expect-error: "--order" is a custom property
      style={{ "--order": props.index, zIndex: props.index }}
    >
      <div className={cardStyles.date}>{props.date}</div>
      <h2 className={cardStyles.name}>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.name}
        </a>
      </h2>
      <div className={cardStyles.imageWrapper}>
        <a href={props.url} target="_blank" rel="noreferrer">
          <img src={imageURL} alt={props.name} className={cardStyles.image} />
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
