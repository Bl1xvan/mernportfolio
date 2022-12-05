import React from 'react'
import {useSelector} from 'react-redux'
import {v4} from 'uuid'
import Tag from './Tag'

export default function Tags(){

const langTabs = useSelector((state) => state.langTabs);
  return (
    <>
        <h3>Tags</h3>
          <div className="tagdiv flex-row">
            {langTabs.map((item, index) => {
              return(
                <Tag item={item} index={index} key={v4()}/>
              )
            })}
          </div>
        <div className="note">Just this website for node..currently</div>
    </>
  )
}

