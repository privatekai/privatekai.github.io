/// <reference types="vite-plugin-svgr/client" />
import profileStyles from "./Profile.module.css"
import Line from "./line.svg?react"

import { greeting, hello, name, showWave } from "../customisation/aboutme.ts"

export default function Profile() {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight - 20,
      behavior: "smooth",
    })
  }
  return (
    <div className={profileStyles.profile}>
      <h1 className={profileStyles.header}>
        {hello}&nbsp;
        <div className={profileStyles.underlinedText}>
          {name}
          <div className={profileStyles.lineContainer}>
            <Line className={profileStyles.line} />
          </div>
        </div>
      </h1>
      <p className={profileStyles.info}>
        {greeting} {showWave && <span className={profileStyles.wave}>👋</span>}
      </p>
      <div className={profileStyles.scrollIndicator} id="scrollIndicator" onClick={scrollDown}>
        ↓
      </div>
    </div>
  )
}
