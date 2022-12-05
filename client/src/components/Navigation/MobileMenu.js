import React, {useState} from 'react'
import { FiMenu } from "react-icons/fi";

export default function MobileMenu(){
  const [toggle, setToggle] = useState(false);
  const styles = {position: "absolute", left: 0, top: toggle ? 0 : -500, width: "100%" }

  const toggleDisplay = () =>{
    setToggle(!toggle)
  }
  return (
    <div className="topmost fixed">
      <button type="button" className="togglebtn" onClick={toggleDisplay}>
        <FiMenu />
      </button>
    <span className="mobilenav" style={styles}>
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

