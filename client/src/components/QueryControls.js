import React from 'react'
import useData from '../hooks/useData'
import { useSelector } from "react-redux";
import { actions } from "../store/index";
import { useDispatch } from "react-redux";
  

export default function QueryControls(){
const {pageCount} = useData()
const langTabs = useSelector((state) => state.langTabs);
const title = useSelector((state) => state.title);
const page = useSelector((state) => state.page);
const dispatch = useDispatch();

  return (
    <div>
    {langTabs.map((tab, index) => {
        return (
          <span key={index}>
            <input
              type="checkbox"
              value={tab.name}
              checked={tab.checked}
              onChange={() => dispatch(actions.handleLanguage(index))}
            />
            <label>{tab.name}</label>
          </span>
        );
      })}
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => dispatch(actions.handleTitle(e.target.value))}
        />
      </div>
      <div>
        <input
          value={page}
          type="number"
          onClick={() =>
            dispatch(actions.handlePage({ limit: 1, difference: -1 }))
          }
        />
        <input
          value={page}
          type="number"
          onClick={() =>
            dispatch(actions.handlePage({ limit: {pageCount}, difference: 1 }))
          }
        />
      </div>
    </div>
  )
}


