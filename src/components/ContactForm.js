import React from 'react'
import NetlifyForm from 'react-netlify-form'

export default function ContactForm() {
  return (
    // <NetlifyForm name='Contact Form'>
    //   {({ loading, error, success }) => (
    //     <div>
    //       {loading &&
    //         <div>Loading...</div>
    //       }
    //       {error &&
    //         <div>Your information was not sent. Please try again later.</div>
    //       }
    //       {success &&
    //         <div>Thank you for contacting us!</div>
    //       }
    //       {!loading && !success &&
    //         <div className="grid_el contact_form">
    //           <div className="row">
    //             <div className="input_group name">
    //               <input type="text" name="name" className="input" required />
    //               <label htmlFor="name" className="label">Nom</label>
    //             </div>
    //             <div className="input_group email">
    //               <input type="text" name="email" className="input" required />
    //               <label htmlFor="email" className="label">Email</label>
    //             </div>
    //           </div>
    //   <div className="input_group message">
    //     <textarea name="message" className="textarea" required></textarea>
    //     <label htmlFor="message" className="label">Message</label>
    //   </div>
    //   <button type="submit" className="submitBtn"> Envoyer </button>
    //         </div>
    //       }
    //     </div>
    //   )}
    // </NetlifyForm>

    <form action="https://maxime-bf.netlify.app" className="grid_el contact_form" method="POST">
      <input type="hidden" name="form-name" value="contact" />
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
