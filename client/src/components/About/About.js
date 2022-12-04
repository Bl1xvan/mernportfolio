import React from 'react'

import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";

export default function About(){
  return (
    <div className="portfolio-section" id="aboutdiv">
      <div id="services">
        <h2>Services</h2>
        <div className="rounded flex-row">
          <div>Portfolios</div>
          <div>Phone Apps</div>
        </div>
      </div>
      <div id="languages">
        <h2>Languages</h2>
        <div className="grid-group rounded small-grid">
          <div className="rounded centered"><SiHtml5 />HTML</div>
          <div className="rounded centered"><SiCss3 />CSS</div>
          <div className="rounded centered"><SiJavascript />JS</div>
          <div className="rounded centered"><SiReact />React</div>
          <div className="rounded centered"><SiNodedotjs />Node</div>
        </div>
      </div>
    </div>
  )
}

