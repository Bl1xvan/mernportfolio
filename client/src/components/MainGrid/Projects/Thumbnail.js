import React from 'react'

export default function Thumbnail({project, displayBlock}) {

const {title, depl} = project
  return (
    <div className="rounded auto-height">
    <a href={depl} className="overlay-container">
      <h4>{title}</h4>
      <span className="overlay centered" id="overlay-link"><h4>Go To Site</h4></span>
    </a>
    <button type="button" className="showdetails" onClick={displayBlock}>Details</button>
  </div>
  )
}


