import React from 'react'
import useData from '../../../hooks/useData'
import { useSelector } from "react-redux";
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";
import useToggle from "../../../hooks/useToggle"
import ToggleDiv from "../Projects/ToggleDiv"
 export default function Pagination() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch()
  const {pageCount} = useData()
  const {showToggle} = useToggle()
  let pages = []

  for(let i = 1; i <= Math.ceil(pageCount); i++){
     pages.push(i)
  }

  const pageJump = (e) => {
    dispatch(actions.handlePageJump(e.target.value))
  }

  return (
    <div className="bothends">
    <button type="button" id="show-filter" className="rounded gray-box" onClick={showToggle}>Show Filters</button>
    <ToggleDiv />
    <div className="flex-row">
      <h3>Page Number</h3>
      <select title="pgnum" className="rounded gray-box" value={page} onChange={pageJump}>
        {pages.map((pg, index) => {
          return <option key={index}>{pg}</option>
        })}
      </select>
    </div>

    </div>
  )
}

