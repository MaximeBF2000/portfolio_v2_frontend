import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"

const initialState = {
  projects: [],
  skills: []
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