import React from 'react'


const Empty = ({message}) => {

 

  return (
    <>
      <div className="full-container centered overlay translightgray">
        <h2 className="rounded gray-box">{message}</h2>
      </div>
      <div className="rounded centered squared gray-box"></div>
      <div className="rounded centered squared gray-box"></div>
      <div className="rounded centered squared gray-box"></div>
      <div className="rounded centered squared gray-box"></div>
    </>
  )
}

export default Empty
