import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"

const initialState = {
  projects: [],
  skills: [
    {
      name: "HTML5 / CSS3",
      color: "#2D7DD2",
      level: 90
    },
    {
      name: "Javascript",
      color: "#f2df11",
      level: 88
    },
    {
      name: "ReactJS",
      color: "#27DCFA",
      level: 60
    },
    {
      name: "Node JS",
      color: "#3e6e14",
      level: 70
    },
    {
      name: "MongoDB",
      color: "#4DA14B",
      level: 90
    },
    {
      name: "SASS",
      color: "slateblue",
      level: 75,
    }
  ]
}

export const GeneralContext = createContext(initialState)

export const GeneralProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GeneralContext.Provider value={{
      projects: state.projects,
      skills: state.skills
    }}>
      {props.children}
    </GeneralContext.Provider>
  )
}