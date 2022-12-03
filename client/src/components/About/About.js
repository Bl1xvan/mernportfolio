import React from 'react'

import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";

export default function About(){
  return (
    <div className="portfolio-section" id="aboutdiv">
      <div id="services">
        <h3>Services</h3>
        <div className="grid-group rounded not-projects">
          <div>Portfolios</div>
          <div>Phone Apps</div>
        </div>
      </div>
      <div id="languages">
        <h3>Languages</h3>
        <div className="grid-group rounded not-projects">
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

