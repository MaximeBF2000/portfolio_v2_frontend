import React from 'react'
import Faq from "../components/Faq"
import ContactInfos from "../components/ContactInfos"
import ContactForm from "../components/ContactForm"

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
