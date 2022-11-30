import React from 'react'
import {useSelector} from 'react-redux'
import {v4} from 'uuid'
import Tag from './Tag'

export default function Tags(){

const langTabs = useSelector((state) => state.langTabs);
  return (
    <div className="tagdiv">
        <h3 className="tagheader">Tags</h3>
        <div className="tag-list">
            {langTabs.map((item, index) => {
              return(
                <Tag item={item} index={index} key={v4()}/>
              )
            })}
        </div>
        <span className="note">Just this website for node..currently</span>
    </div>
  )
}

