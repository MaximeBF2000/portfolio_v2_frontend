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

function App() {
  useEffect(() => {
    AOS.init()
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
        </Route>
      </Switch>
    </Router>
    </GeneralProvider>
  )
}

export default App
