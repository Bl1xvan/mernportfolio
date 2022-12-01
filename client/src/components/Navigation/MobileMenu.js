import React, {useState} from 'react'
import SocialMedia from './SocialMedia'
import { FiMenu } from "react-icons/fi";

export default function MobileMenu(){
  const [toggle, setToggle] = useState(false);
  const styles = { position: "relative", top: toggle ? 0 : -500 }

  const toggleDisplay = () =>{
    setToggle(!toggle)
  }
  return (
    <div className="M-navbar">
    <div className="menu">
      <span className="mobile-icons"><SocialMedia /></span>
      <button type="button" className="togglebtn" onClick={toggleDisplay}>
        <FiMenu />
      </button>
    </div>
    <span className="M-navbargrid" style={styles}>
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

