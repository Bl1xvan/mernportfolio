import React from 'react'
import AllProjects from './Projects/AllProjects'
import Pagination from './Pagination/Pagination'
import PgBtnPair from './Pagination/PgBtnPair'
import { useSelector } from "react-redux";

const MainGrid = () => {

  

  const title = useSelector((state) => state.title);
  const languages = useSelector((state) => state.languages);
  return (
    <div id="projectsdiv" className="portfolio-section centered">
      <h2 id="toppoint">Projects</h2>
      <div><pre>{title && `Name: ${title} |`} {languages && `Contains languages: ${languages.replace(/&/g, ", ")}`}</pre></div>
      <Pagination />
      <AllProjects />
      <PgBtnPair  /> 
    </div>
  )
}

export default MainGrid
