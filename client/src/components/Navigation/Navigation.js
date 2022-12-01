import React from 'react'
import useWindowResize from '../../hooks/useWindowResize'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'


export default function Navigation(){

  const {width} = useWindowResize()
  
  return (
    <>
      {width < 650 ? <MobileMenu /> : <DesktopMenu /> }
    </>
  )
}

