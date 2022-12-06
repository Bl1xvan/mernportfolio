import React from 'react'
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";

export default function SearchBar({searchRef}){
  const dispatch = useDispatch()
  return (
      <>
        <h2>Search</h2>
        <input type="text" ref={searchRef} onChange={() => dispatch(actions.handleTitle(searchRef.current.value))} />
      </>
  )
}

