import React from 'react'
import emailjs from "emailjs-com"
import SocialMedia from "../Navigation/SocialMedia"

export default function Contact(){


  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm(
      'service_eqrnc04',
      'template_vvdgv38',
      e.target,
      'FDE9tH1CmID1efyYz'
    ).then(()=>{
      alert("Message Sent!")
      window.location.reload(false)
    }).catch(()=>alert("Error! Please try again"))
  }
  return (
    <div id="contactdiv">
      <h1 id="contact-header">Send a Message!</h1>
      <div className="grid-group large-grid">
        <div id="calltoaction">
          <p>My main offer is for freelance projects, but please let me know if you have other type of projects in mind!</p>
          <div>
            <h3>Social Media</h3>
            <div className="grid-group tiny-grid"><SocialMedia /></div>
          </div>
        </div>
        <form id="send-email" className="rounded" onSubmit={sendEmail}>
          <span className="grid-group medium-grid">
            <label className="label-flex">
              <span>First Name</span>
              <input type="text" id="fname" name="fname" required />
            </label>
            <label className="label-flex">
              <span>Last Name</span>
              <input type="text" id="lname" name="lname" required />
            </label>
          </span>
          <span className="grid-group medium-grid">
            <label className="label-flex">
              <span>Email</span>
              <input type="email" id="email" name="email" required/>
            </label>
            <label className="label-flex"> 
              <span>Subject</span>
              <input type="text" id="subject" name="subject" required />
            </label>
          </span>
          <span className="label-flex">
            <label><span>Message</span></label>
            <textarea id="message" name="message" className="span2" placeholder="Send a message" required></textarea>
          </span>
          <label><input type="submit" id="submit" /> </label>
        </form>
      </div>
    </div>
  )
}




