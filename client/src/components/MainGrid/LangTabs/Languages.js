import React from 'react'
import {v4} from 'uuid'

const Languages = ({languages}) => {
    return (languages.map(l => (<div key={v4()} className="lang">{l}</div>)))
}

export default Languages
