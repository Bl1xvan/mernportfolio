import React from 'react'
import {v4} from 'uuid'

const Languages = ({languages}) => {
    const separated = {marginTop: "10px", marginRight: "10px"}
    return (<div className="flex-row" style={separated}>
                    {languages.map(l => (
                    <div key={v4()} className="purplediv rounded">{l}</div>))}
            </div>)
}

export default Languages
