import React from 'react'

export default function DesktopMenu() {
  return (
    <div className="fixed topmost bothends navcolor">
    <span>Portfolio</span>
    <span className="desktopnav">
        <a href="#welcomediv" className="navcolor">
          Welcome
        </a>
        <a href="#aboutdiv" className="navcolor">
          Services
        </a>
        <a href="#projectsdiv" className="navcolor">
          Projects
        </a>
        <a href="#contactdiv" className="navcolor">
          Contact
        </a>
    </span>
  </div>
  )
}

