/// <reference types="vite-plugin-svgr/client" />
import contactStyles from "./Contact.module.css"
import Line from "./line.svg?react"

import { socialLinks } from "../customisation/socials.tsx"

export default function Contact() {
  return (
    <div className={contactStyles.contact}>
      <h1 className={contactStyles.title}>
        <span>Contact Me</span>
        <div className={contactStyles.lineContainer}>
          <Line className={contactStyles.line} />
        </div>
      </h1>

      <div className={contactStyles.info}>
        <div className="hidden">
          {socialLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.link} target="_blank" rel="noreferrer" className={contactStyles.infoItem}>
              {socialLink.icon}
              <p>{socialLink.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
