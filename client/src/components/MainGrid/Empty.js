import React from 'react'

const Empty = ({message}) => {
  return (
    <>
      <div className="rounded centered squared">{message}</div>
      <div className="rounded centered squared">{message}</div>
      <div className="rounded centered squared">{message}</div>
      <div className="rounded centered squared">{message}</div>
    </>
  )
}

export default Empty
