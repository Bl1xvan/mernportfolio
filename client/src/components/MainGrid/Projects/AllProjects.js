import React from 'react'
import OneProject from './OneProject'
import Empty from "../Empty"
import useData from '../../../hooks/useData'

export default function AllProjects() {

  const {projects, total} = useData()
  return (
    <div className="allprojects">
      {(typeof projects === 'undefined') ? (
        <Empty emptyClass={"loading"} message={"Loading"}/>
      ) : (total === 0) ? ( <Empty emptyClass={"notfound"} message={"No Results"} /> ) : (
          projects.map((project) => {
          return (
                  <OneProject project={project} />         
                  )
      })
      )}
      <a id="totop" href="#toppoint">^</a>
    </div>
  )
}


