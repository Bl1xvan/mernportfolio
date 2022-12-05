import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Tags from '../LangTabs/Tags'
import useToggle from '../../../hooks/useToggle'


export default function ToggleDiv() {
  const {hideToggle} = useToggle()
  

  return (
    <div className="togglediv label-flex rounded">
      <SearchBar />
      <Tags />
      <button type="button">Clear Search</button>
      <button type="button" onClick={hideToggle}>
        Hide Filters
      </button>
    </div>
  )
}


