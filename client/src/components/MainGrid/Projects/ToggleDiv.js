import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Tags from '../LangTabs/Tags'
import useToggle from '../../../hooks/useToggle'


export default function ToggleDiv() {
  const {hideToggle} = useToggle()
  
  return (
    <div style={{backgroundColor: 'yellow'}} className="togglediv">
    <div className="filter-controls">
      <SearchBar />
      <Tags />
        <button type="button" className="clearsearch">Clear Search</button>
    </div>
    <div className="toggle-controls" onClick={hideToggle}>
        <h3>Hide Filters</h3>
    </div>
    </div>
  )
}


