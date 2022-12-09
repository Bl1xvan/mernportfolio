import React from 'react'
import Languages from '../../LangTabs/Languages'

export default function MobileOverlay({project, displayNone}) {
    const {image, title, repository, deployment, description, languages} = project
    const separated = {marginTop: "15px", marginRight: "15px", alignSelf: "center", maxWidth: "225px" }
    return (
          <div className="absolute overlay-all transdarkgray">
            <div className="position-center rounded gray-section label-flex">
                <button type="button" onClick={displayNone}>X</button>
                  <img src={image} alt={title} style={{width: "95%", height: "auto", margin: "0 auto", maxWidth: "350px"}}/>
                      <h2>{title}</h2>
                      <Languages languages={languages} />
                      <p className="description">{description}</p>
                      <div className="bothends">
                        <a className="rounded purplediv" style={separated} href={repository}>
                          Repository
                        </a>
                        <a className="rounded purplediv" style={separated} href={deployment}>
                          Deployment
                        </a>
                      </div>
                  </div>
              </div>
      )
}