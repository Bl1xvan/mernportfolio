import React from 'react'
import OneProject from './OneProject'
import Empty from "../Empty"
import useData from '../../../hooks/useData'
import {IoMdArrowDropup} from "react-icons/io";
import {v4} from "uuid"

export default function AllProjects() {

  const {projects, total} = useData()
  return (
    <>
    <div className="rounded grid-group projects overlay-container gray-section">
      {(typeof projects === 'undefined') ? (
        <Empty message={"Loading..."}/>
      ) : (total === 0) ? ( <Empty message={"No Results..."} /> ) : (
          projects.map((project, index) => {
          return (
                  <OneProject project={project} key={v4()} index={index} />         
                  )
      })
      )}
      <a id="totop" className="squared circled purplediv" href="#toppoint"><IoMdArrowDropup /></a>
    </div>
    
    </>
  )
}


