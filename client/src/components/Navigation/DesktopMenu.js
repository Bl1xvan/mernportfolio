import React from 'react'
import SocialMedia from './SocialMedia'

export default function DesktopMenu() {
  return (
    <div className="D-navbar">
    <span className="desktop-icons"><SocialMedia /></span>
    <span className="D-navbargrid">
        <a href="#welcomediv">
          Welcome
        </a>
        <a href="#aboutdiv">
          Services
        </a>
        <a href="#projectsdiv">
          Projects
        </a>
        <a href="#contactdiv">
          Contact
        </a>
    </span>
  </div>
  )
}

