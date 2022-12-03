import React from 'react'

export default function Thumbnail({project, displayBlock}) {

const {title, depl} = project
  return (
    <div className="rounded auto-height">
    <a href={depl} className="overlay-container">
      <h2 className="thumbnail-name">{title}</h2>
      <span className="overlay centered rounded"><h4>Go To Site</h4></span>
    </a>
    <button type="button" className="showdetails" onClick={displayBlock}>Details</button>
  </div>
  )
}


