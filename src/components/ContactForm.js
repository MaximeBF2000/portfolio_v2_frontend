import React from 'react'

export default function ContactForm() {
  return (
    <form className="grid_el contact_form" method="POST" data-netlify="true">
      <div className="row">
        <div className="input_group name">
          <input type="text" name="name" className="input" required />
          <label htmlFor="name" className="label">Nom</label>
        </div>
        <div className="input_group email">
          <input type="text" name="email" className="input" required />
          <label htmlFor="email" className="label">Email</label>
        </div>
      </div>
      <div className="input_group message">
        <textarea name="message" className="textarea" required></textarea>
        <label htmlFor="message" className="label">Message</label>
      </div>
      <button type="submit" className="submitBtn"> Envoyer </button>
    </form>
  )
}
