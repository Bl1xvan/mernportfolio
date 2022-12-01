import {useState, useEffect} from 'react'

export default function useWindowResize(){
    const [windowSize, setWindowSize] = useState({
        width: undefined, height: undefined
    }) 

    useEffect(() => {
       function handleResize(){
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
       } 
       window.addEventListener("resize", handleResize)

       handleResize()

       return () => window.removeEventListener("resize", handleResize)
    }, []) 

    return windowSize
}

