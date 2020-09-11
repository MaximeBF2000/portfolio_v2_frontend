import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components imports

import Nav from "./components/Nav"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import BlogPage from "./pages/BlogPage"
import ArticlePage from "./pages/ArticlePage"
import ContactPage from "./pages/ContactPage"
// import EditArticles from './pages/EditArticles'

// const deploy_url = "https://maxime-bounaas.netlify.app/"


function App() {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/about" >
          <AboutPage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/articles">
          <BlogPage />
        </Route>
        <Route exact path="/articles/:id">
          <ArticlePage />
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
  )
}

export default App
