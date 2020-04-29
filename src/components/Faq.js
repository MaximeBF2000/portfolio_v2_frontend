import React, { useContext } from 'react'
import { GeneralContext } from "../context/AppState"

export default function Faq() {
  const { faq_content } = useContext(GeneralContext)

  const showAnswer = e => {
    const answer = e.target.nextSibling
    answer.classList.toggle("none")
  }

  return (
    <div className="faq">
      <h2>FAQ</h2>
      {faq_content.map(q => (
        <div className="question_answer" key={Math.random()}>
          <div className="question" onClick={showAnswer}>
            {q.question}
          </div>
          <div className="answer none">
            {q.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
