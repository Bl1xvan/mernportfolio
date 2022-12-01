import {useState, useCallback} from 'react'

export default function useToggle() {
    const [toggle, setToggle] = useState(false)
    
    const showToggle = useCallback(() =>{
        setToggle(true)
    }, [])
    const hideToggle = useCallback(() => {
        setToggle(false)
    }, [])

    return {toggle, showToggle, hideToggle}
}


