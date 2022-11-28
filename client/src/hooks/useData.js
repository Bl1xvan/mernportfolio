import {useEffect, useState} from "react"
import { useSelector } from "react-redux";


function useData() {
    const [backendData, setBackendData] = useState([{}])
    const languages = useSelector((state) => state.languages);
    const title = useSelector((state) => state.title);
    const page = useSelector((state) => state.page);
    
    useEffect(() => {
      fetch(`https://mernportfolio.onrender.com/api/v1/projects?p=${page}&languages=${languages}&title=${title}`).then(
        response => response.json()
      ).then(
        data => setBackendData(data)
      )
    }, [page, languages, title])



    return backendData

}

export default useData