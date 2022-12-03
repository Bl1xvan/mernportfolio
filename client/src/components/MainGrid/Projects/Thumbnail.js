import React from 'react'

export default function Thumbnail({project, displayBlock}) {

const {title, depl} = project
  return (
    <div className="rounded auto-height">
    <a href={depl} className="thumbnail-link">
      <h2 className="thumbnail-name">{title}</h2>
      <span className="smloverlay"><h4>Go To Site</h4></span>
    </a>
    <button type="button" className="showdetails" onClick={displayBlock}>Details</button>
  </div>
  )
}


