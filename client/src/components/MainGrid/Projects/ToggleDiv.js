import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Tags from '../LangTabs/Tags'
import useToggle from '../../../hooks/useToggle'


export default function ToggleDiv() {
  const {hideToggle} = useToggle()
  

  return (
    <div className="togglediv">
      <div className="filter-controls">
        <SearchBar />
        <Tags />
      <button type="button" className="clearsearch">Clear Search</button>
    </div>
    <button type="button" onClick={hideToggle}>
        Hide Filters
    </button>
    </div>
  )
}


