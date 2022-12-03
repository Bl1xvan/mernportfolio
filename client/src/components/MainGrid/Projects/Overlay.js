import React from 'react'
import Languages from '../LangTabs/Languages'

export default function Overlay({project, displayChange, displayNone}) {
    const {img, title, repo, depl, desc, languages} = project
    return (
        <div style={displayChange}>
          <div className="fullinfo">
          <div className="hidediv">
                <button type="button" className="hidedetails" onClick={displayNone}>X</button>
              </div>
                <div className="half">
                    <img src={img} alt={title} />
                </div>
                <div className="half">
                <div className="fullproject-name"><h2>{title}</h2></div>
                  <div className="language"><Languages languages={languages} /></div>
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


