import {useState} from 'react'

export default function useToggle() {
    const [toggle, setToggle] = useState('yellow')
    const showToggle = () => {
        const toggleDiv = document.querySelector('.togglediv')
        setToggle('pink')
        toggleDiv.style.backgroundColor = toggle
    }

    const hideToggle = () => {
        const toggleDiv = document.querySelector('.togglediv')
        setToggle('yellow')
        toggleDiv.style.backgroundColor = toggle
    }

    return {showToggle, hideToggle}
}


