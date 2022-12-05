import {useState} from 'react'

export default function useToggle() {
    const [toggle, setToggle] = useState(`${-1000}px`)
    const showToggle = () => {
        const toggleDiv = document.querySelector('.togglediv')
        setToggle(0)
        toggleDiv.style.left = toggle
    }

    const hideToggle = () => {
        const toggleDiv = document.querySelector('.togglediv')
        setToggle(`${-1000}px`)
        toggleDiv.style.left = toggle
    }

    return {showToggle, hideToggle}
}


