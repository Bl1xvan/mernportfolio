import React from 'react'
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";

export default function SearchBar(){
  const dispatch = useDispatch()
  return (
      <>
        <h2>Search</h2>
        <input type="text" onChange={(e) => dispatch(actions.handleTitle(e.target.value))} />
      </>
  )
}

