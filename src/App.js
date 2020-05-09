import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GeneralProvider } from "./context/AppState"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components imports

import Nav from "./components/Nav"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

// const deploy_url = "https://maxime-bf.netlify.app"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <GeneralProvider>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/about" >
          <AboutPage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        {/* Home page route at the end for netlify deploy + NOT EXACT PATH  */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </GeneralProvider>
  )
}

export default App
