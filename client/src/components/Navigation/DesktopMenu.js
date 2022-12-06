import React from 'react'

export default function DesktopMenu() {
  return (
    <div className="fixed topmost bothends purplediv">
    <span>Portfolio</span>
    <span className="desktopnav">
        <a href="#welcomediv" className="purplediv">
          Welcome
        </a>
        <a href="#aboutdiv" className="purplediv">
          Services
        </a>
        <a href="#projectsdiv" className="purplediv">
          Projects
        </a>
        <a href="#contactdiv" className="purplediv">
          Contact
        </a>
    </span>
  </div>
  )
}

