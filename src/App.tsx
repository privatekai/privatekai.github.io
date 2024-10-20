import appStyles from "./App.module.css"
import Attribution from "./Attribution/Attribution.tsx"
import Contact from "./Contact/Contact"
import Profile from "./Profile/Profile"
import Projects from "./Projects/Projects"

function App() {
  return (
    <div className={`${appStyles.app} app`}>
      <Profile />
      <Projects />
      <Contact />

      {/* Attribution - please do not remove this section */}
      <Attribution />
    </div>
  )
}

export default App
