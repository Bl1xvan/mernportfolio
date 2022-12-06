import React, {useState} from 'react'
import Overlay from "./Overlay"
import {v4} from 'uuid'

export default function OneProject({project, index}) {
  const {title, deployment} = project
  const [displayStatus, setDisplayStatus] = useState(false);
  

  const displayBlock = () => {
    setDisplayStatus(true)
  
  }

  const displayNone = () => {
    setDisplayStatus(false)

  }

  const animation = {
    opacity: 1,
    transition: `opacity ${index}s`
  }

  const outerstyle="rounded auto-height squared gray-box"
  const overlaystyle = "overlay centered full-container transdarkgray"
  const h4style = "rounded gray-section"
  const buttonstyle = "showdetails gray-box"

  return (
    <>
      <div className={outerstyle} style={animation}>
        <a href={deployment} className="overlay-container">
            <h4 style={{padding: "15px"}}>{title}</h4>
              <span className={overlaystyle} id="overlay-link">
            <h4 className={h4style}>Go To Site</h4>
          </span>
        </a>
        <button type="button" className={buttonstyle} onClick={displayBlock}>Details</button>
      </div>
      {displayStatus && <Overlay key={v4()} project={project} displayNone={displayNone}/>}
    </>
  )
}


