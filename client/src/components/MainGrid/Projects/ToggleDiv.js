import React, {useRef} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Tags from '../LangTabs/Tags'
import useToggle from '../../../hooks/useToggle'
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";


export default function ToggleDiv() {
  const searchRef = useRef()
  const dispatch = useDispatch()
  const {hideToggle} = useToggle()
  
  const clearFilter = (e) => {
    e.preventDefault()
    searchRef.current.value= ""
    dispatch(actions.handleReset())
  }

  return (
    <div className="togglediv label-flex rounded">
      <SearchBar searchRef={searchRef}/>
      <Tags />
      <button type="button" onClick={clearFilter}>Clear Search</button>
      <button type="button" onClick={hideToggle}>
        Hide Filters
      </button>
    </div>
  )
}


