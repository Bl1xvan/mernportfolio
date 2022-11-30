import React from 'react'
import useData from '../../../hooks/useData'
import { useSelector } from "react-redux";

 export default function Pagination() {
  const page = useSelector((state) => state.page);
  const {pageCount} = useData()
  let pages = []

  for(let i = 1; i <= Math.ceil(pageCount); i++){
     pages.push(i)
  }

  return (
    <div className="pgcont">
    <button type="button" className="showside">Show Filters</button>
    <div className="pglabel">
    <h3>Page Number</h3>
    <select className="pgnum" value={page}>
      {pages.map((pg, index) => {
        return <option key={index}>{pg}</option>
      })}
    </select>
    </div>

    </div>
  )
}

