import React, {useState} from 'react'
import Thumbnail from "./Thumbnail"
import Overlay from "./Overlay"
import {v4} from 'uuid'

export default function OneProject({project}) {
  
  const [displayStatus, setDisplayStatus] = useState("none");
  

  const displayBlock = () => {
    setDisplayStatus("block")
    console.log(displayStatus)
  }

  const displayNone = () => {
    setDisplayStatus("none")
    console.log(displayStatus)
  }

  const displayChange = {
    display: displayStatus
  }

  return (
    <>
    <Thumbnail key={v4()} project={project} displayBlock={displayBlock}/>
    <Overlay key={v4()} project={project} displayNone={displayNone} displayChange={displayChange}/>
    </>
  )
}


