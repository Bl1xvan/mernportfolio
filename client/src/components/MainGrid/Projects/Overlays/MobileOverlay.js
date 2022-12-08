import React from 'react'
import Languages from '../../LangTabs/Languages'

export default function MobileOverlay({project, displayNone}) {
    const {image, title, repository, deployment, description, languages} = project
    return (

          <div className="full-container overlay-all label-flex gray-section">
                <button type="button" onClick={displayNone}>X</button>
                <div className="label-flex">
                  <img src={image} alt={title} style={{width: "200px", height: "200px"}} />
                  <div className="label-flex scroll">
                      <h2>{title}</h2>
                      <Languages languages={languages} />
                      <p className="description">{description}</p>
                      <div className="bothends">
                        <a className="rounded purplediv" href={repository}>Repository</a>
                        <a className="rounded purplediv" href={deployment}>Deployment</a>
                      </div>
                  </div>
                </div>
            </div>
      )
}