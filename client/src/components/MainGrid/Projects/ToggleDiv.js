import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Tags from './Tags'
import { useSpring, animated } from 'react-spring'


export default function ToggleDiv() {
const [toggle, setToggle] = useState(false)
const toggleDisplay = () =>{
    setToggle(!toggle)
}
const styles = useSpring({position: "absolute", zIndex: 3, left: toggle ? 0 : -1000 })
  return (
    <animated.div style={styles} className="togglediv">
    <div className="filter-controls">
      <SearchBar />
      <Tags />
        <button type="button" className="clearsearch">Clear Search</button>
    </div>
    <div className="toggle-controls" onClick={toggleDisplay}>
        <h3>Hide Filters</h3>
    </div>
    </animated.div>
  )
}


