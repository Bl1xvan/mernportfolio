import React from 'react'
import Thumbnail from "./Thumbnail"
import Overlay from "../Overlay"
import {v4} from 'uuid'

export default function OneProject({project}) {
  return (
    <>
    <Thumbnail key={v4()} project={project} />
    <Overlay key={v4()} project={project} />
    </>
  )
}


