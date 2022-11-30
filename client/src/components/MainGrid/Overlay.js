import React from 'react'
import Languages from './Languages'
import {v4} from 'uuid'

export default function Overlay({project}) {
    const {img, title, repo, depl, desc, languages} = project
    return (
        <div className="overlay">
          <div className="fullinfo">
          <div className="hidediv">
                <button type="button" className="hidedetails" >X</button>
              </div>
                <div className="half">
                    <img src={img} alt={title} />
                </div>
                <div className="half">
                <div className="fullproject-name"><h2>{title}</h2></div>
                  <div className="language"><Languages key={v4()} languages={languages} /></div>
                  <div className="description"><p>{desc}</p></div>
                  <div className="links">
                    <a className="link" href={repo}>Repository</a>
                    <a className="link" href={depl}>Deployment</a>
                  </div>
                </div>
            </div>
        </div>
      )
}


