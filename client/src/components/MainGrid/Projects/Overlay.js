import React from 'react'
import useWindowResize from '../../../hooks/useWindowResize'
import MobileOverlay from './Overlays/MobileOverlay'
import DesktopOverlay from './Overlays/DesktopOverlay'


export default function Navigation(){

  const {width} = useWindowResize()
  
  return (
    <>
      {width < 450 ? <MobileOverlay /> : <DesktopOverlay /> }
    </>
  )
}


