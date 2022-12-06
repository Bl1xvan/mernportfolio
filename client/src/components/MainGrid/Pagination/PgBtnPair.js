import React from 'react'
import useData from '../../../hooks/useData'
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import { useSelector } from "react-redux";
import { actions } from "../../../store/index";
import { useDispatch } from "react-redux";

export default function PgBtnPair() {
  const {pageCount, next, total} = useData()
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch()
  return (
    <div className="bothends">
    <button 
      type="button"
      className="centered gray-box"
      onClick={() =>
        dispatch(actions.handlePage({ limit: 1, difference: -1 }))
      }
      disabled={page === 1}><IoMdArrowDropleft />
    </button>

    <button 
      type="button"
      className="centered gray-box" 
      onClick={() =>
        dispatch(actions.handlePage({ limit:{pageCount}, difference: 1 }))
      }
      disabled={next === "null" || total === 0}><IoMdArrowDropright />
    </button>
    </div>
  )
}



