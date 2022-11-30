import React from 'react'
import AllProjects from './Projects/AllProjects'
import Pagination from './Pagination/Pagination'
import PgBtnPair from './PgBtnPair'
import ToggleDiv from './ToggleDiv'
import { useSelector } from "react-redux";

const MainGrid = () => {
  const title = useSelector((state) => state.title);
  const languages = useSelector((state) => state.languages);
  return (
    <div id="projectsdiv">
      <ToggleDiv />
      <div className="maingrid">
      <div className="middlecont">
      <div className="port-hdr"><h2 id="toppoint">Projects</h2>
      </div>
      <div><pre>{title && `Name: ${title} |`} {languages && `Contains languages: ${languages.replace(/&/g, ", ")}`}</pre></div>
      <Pagination />
      <AllProjects />
      <PgBtnPair  /> 
      </div>
      </div>
    </div>
  )
}

export default MainGrid
