import React from 'react'
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";

export default function SearchBar(){
  const dispatch = useDispatch()
  return (
      <div className="searchdiv">
        <h2 className="searchlabel">Search</h2>
        <input type="text" name="searchbar" className="searchbar" onChange={(e) => dispatch(actions.handleTitle(e.target.value))} />
      </div>
  )
}

