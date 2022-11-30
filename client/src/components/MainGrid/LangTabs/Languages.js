import React from 'react'

const Languages = ({languages}) => {
    return (languages.map(l => (<div className="lang">{l}</div>)))
}

export default Languages
