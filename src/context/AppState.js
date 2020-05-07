import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"
import { projects, skills, faq_content, parcours_step } from "./data"

const initialState = {
  projects,
  skills,
  faq_content,
  parcours_step
}

export const GeneralContext = createContext(initialState)

export const GeneralProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GeneralContext.Provider value={{
      projects: state.projects,
      skills: state.skills,
      faq_content: state.faq_content,
      parcours_step: state.parcours_step
    }}>
      {props.children}
    </GeneralContext.Provider>
  )
}