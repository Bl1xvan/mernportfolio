import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Tags from '../LangTabs/Tags'
import { useSpring, animated } from 'react-spring'
import useToggle from '../../../hooks/useToggle'


export default function ToggleDiv() {

const {toggle, hideToggle} = useToggle()
const styles = useSpring({position: "absolute", zIndex: 3, left: toggle ? 0 : 500 })
  return (
    <animated.div style={styles} className="togglediv">
    <div className="filter-controls">
      <SearchBar />
      <Tags />
        <button type="button" className="clearsearch">Clear Search</button>
    </div>
    <div className="toggle-controls" onClick={hideToggle}>
        <h3>Hide Filters</h3>
    </div>
    </animated.div>
  )
}


