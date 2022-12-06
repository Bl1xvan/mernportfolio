import React, {useState} from 'react'
import Overlay from "./Overlay"
import {v4} from 'uuid'

export default function OneProject({project}) {
  const {title, deployment} = project
  const [displayStatus, setDisplayStatus] = useState(false);
  

  const displayBlock = () => {
    setDisplayStatus(true)
  
  }

  const displayNone = () => {
    setDisplayStatus(false)

  }


  return (
    <>
      <div className="rounded auto-height squared">
      <a href={deployment} className="overlay-container">
        <h4>{title}</h4>
        <span className="overlay centered full-container" id="overlay-link">
          <h4 className="rounded">Go To Site</h4>
        </span>
      </a>
      <button type="button" className="showdetails" onClick={displayBlock}>Details</button>
    </div>
    {displayStatus && <Overlay key={v4()} project={project} displayNone={displayNone}/>}
    </>
  )
}


