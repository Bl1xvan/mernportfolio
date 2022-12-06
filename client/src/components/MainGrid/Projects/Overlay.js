import React from 'react'
import Languages from '../LangTabs/Languages'

export default function Overlay({project, displayNone}) {
    const {image, title, repository, deployment, description, languages} = project
    return (
        <div className="fixed full-container overlay-all">
          <div className="position-center rounded">
                <button type="button" onClick={displayNone}>X</button>
                <div className="grid-group medium-grid scroll">
                  <div className="centered"><img src={image} alt={title} className="full-container squared" /></div>
                  <div className="grid-group align-row">
                      <h2>{title}</h2>
                      <Languages languages={languages} />
                      <p className="description">{description}</p>
                      <div className="bothends">
                        <a className="colored rounded" href={repository}>Repository</a>
                        <a className="colored rounded" href={deployment}>Deployment</a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      )
}


