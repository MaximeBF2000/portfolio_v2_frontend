import React from 'react'

export default function ContactForm() {
  return (
    <form action="https://maxime-bf.netlify.app" className="grid_el contact_form" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div className="row">
        <div className="input_group name">
          <input type="text" name="name" className="input" required />
          <label htmlFor="name" className="label">Nom</label>
        </div>
        <div className="input_group email">
          <input type="email" name="email" className="input" required />
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
