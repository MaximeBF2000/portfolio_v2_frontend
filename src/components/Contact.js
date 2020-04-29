import React from 'react'
import Faq from "./Faq"
import ContactInfos from "./ContactInfos"
import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <section id="contact">
      <Faq />
      <div className="grid">
        <ContactForm />
        <ContactInfos />
      </div>
    </section>
  )
}
