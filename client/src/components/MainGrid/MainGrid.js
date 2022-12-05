import React from 'react'
import AllProjects from './Projects/AllProjects'
import Pagination from './Pagination/Pagination'
import PgBtnPair from './Pagination/PgBtnPair'
import ToggleDiv from './Projects/ToggleDiv'
import { useSelector } from "react-redux";

const MainGrid = () => {

  

  const title = useSelector((state) => state.title);
  const languages = useSelector((state) => state.languages);
  return (
    <div id="projectsdiv" className="portfolio-section">
      <div>
      <div>
      <ToggleDiv />
      <div><h2 id="toppoint">Projects</h2></div>
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
