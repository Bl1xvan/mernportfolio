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
      <button type="button" className="togglebtn gray-box rounded" onClick={toggleDisplay}>
        <FiMenu />
      </button>
    <span className="mobilenav" style={styles}>
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

