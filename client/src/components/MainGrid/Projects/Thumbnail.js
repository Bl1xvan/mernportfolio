import React from 'react'

export default function Thumbnail({project, displayBlock}) {

const {title, depl} = project
  return (
    <div className="rounded auto-height squared">
      <a href={depl} className="overlay-container">
        <h4>{title}</h4>
        <span className="overlay centered full-container" id="overlay-link">
          <h4 className="rounded">Go To Site</h4>
        </span>
      </a>
    <button type="button" className="showdetails" onClick={displayBlock}>Details</button>
  </div>
  )
}


