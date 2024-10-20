import attributionStyles from "./Attribution.module.css"

function Attribution() {
  return (
    <div className={attributionStyles.attributionContainer}>
      <span className={attributionStyles.attribution}>
        Designed by <a href="https://github.com/alexanderbira/personal-website-template">Alex BR</a>
      </span>
    </div>
  )
}

export default Attribution
