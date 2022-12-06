import React from 'react'
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";

export default function Tag({item, index}) {
  const dispatch = useDispatch()
  return (
    <label className="rounded transdarkgray"><input type="checkbox" checked={item.checked} onChange={() => dispatch(actions.handleLanguage(index))} />{item.name}</label>
  )
}

 
