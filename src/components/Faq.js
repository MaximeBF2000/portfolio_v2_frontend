import React, { useContext } from 'react'
import { GeneralContext } from "../context/AppState"
import { MdArrowDropDown } from "react-icons/md"

export default function Faq() {
  const { faq_content } = useContext(GeneralContext)

  const showAnswer = e => {
    const question = e.target
    const answer = question.nextSibling
    answer.classList.toggle("none")
    question.classList.toggle("open")
  }

  return (
    <div className="faq">
      <h2>FAQ</h2>
      {faq_content.map(q => (
        <div className="question_answer" key={Math.random()}>
          <div className="question" onClick={showAnswer}>
            {q.question}
            <MdArrowDropDown className="arrow" />
          </div>
          <div className="answer none">
            {q.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
