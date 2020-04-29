import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"
import { projects, skills, faq_content } from "./data"

const initialState = {
  projects,
  skills,
  faq_content
}

export const GeneralContext = createContext(initialState)

export const GeneralProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GeneralContext.Provider value={{
      projects: state.projects,
      skills: state.skills,
      faq_content: state.faq_content
    }}>
      {props.children}
    </GeneralContext.Provider>
  )
}