import React from 'react'
import {v4} from 'uuid'

const Languages = ({languages}) => {
    return (<div className="flex-row">{languages.map(l => (<div key={v4()} className="colored rounded">{l}</div>))}</div>)
}

export default Languages
