import React from 'react'
import OneProject from './OneProject'
import Empty from "../Empty"
import useData from '../../../hooks/useData'
import {v4} from "uuid"

export default function AllProjects() {

  const {projects, total} = useData()
  return (
    <>
    <div className="rounded grid-group projects" id="allprojects">
      {(typeof projects === 'undefined') ? (
        <Empty message={"Loading..."}/>
      ) : (total === 0) ? ( <Empty message={"No Results..."} /> ) : (
          projects.map((project) => {
          return (
                  <OneProject project={project} key={v4()} />         
                  )
      })
      )}
      <a id="totop" href="#toppoint">^</a>
    </div>
    
    </>
  )
}


