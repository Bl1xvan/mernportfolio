import React from 'react'
import useData from '../../hooks/useData'

export default function Thumbnail() {

const {title, depl} = useData()
  return (
    <div className="main-cont">
    <a href={depl} className="thumbnail-link">
      <h2 className="thumbnail-name">{title}</h2>
      <span className="smloverlay"><h4>Go To Site</h4></span>
     </a>
  
    <div className="button-cont">
      <button type="button" className="showdetails">Details</button>
    </div>
  </div>
  )
}


