import React from 'react'
import useWindowResize from '../../../hooks/useWindowResize'
import MobileOverlay from './Overlays/MobileOverlay'
import DesktopOverlay from './Overlays/DesktopOverlay'


export default function Navigation({project, displayNone}){
  const {width} = useWindowResize()
  
  return (
    <>
      {width < 975 ? <MobileOverlay project={project} displayNone={displayNone} /> : 
      <DesktopOverlay project={project} displayNone={displayNone} /> }
    </>
  )
}


