import React from 'react'

const MainGrid = ({project}) => {
  const {title, languages} = project
  return (
    <div>
      <h3>{title}</h3>
      <p>{languages}</p>
    </div>
  )
}

export default MainGrid
