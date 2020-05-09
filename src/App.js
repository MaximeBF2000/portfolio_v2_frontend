import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GeneralProvider } from "./context/AppState"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components imports
import Header from "./components/Header"
import Nav from "./components/Nav"
import AboutText from "./components/AboutText"
import Stat from "./components/Stat"
import Prestation from "./components/Prestation"
import Skillbars from "./components/Skillbars"
import Parcours from "./components/Parcours"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const deploy_url = "https://maxime-bf.netlify.app"

function App() {
  useEffect(() => {
    AOS.init()

    // FOR NETLIFY DEPLOY
    window.onbeforeunload = () => {
      window.location.href = deploy_url
    }
  }, [])


  return (
    <GeneralProvider>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Header />
          <Stat />
          <Prestation />
        </Route>
        <Route exact path="/about" >
          <AboutText />
          <Skillbars />
          <Parcours />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
    </GeneralProvider>
  )
}

export default App
