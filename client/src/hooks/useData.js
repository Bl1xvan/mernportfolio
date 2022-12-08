import {useEffect, useState} from "react"
import axios from 'axios'
import { useSelector } from "react-redux";


function useData() {
    const [backendData, setBackendData] = useState([{}])
    const currentPageUrl = useSelector((state) => state.currentPageUrl)
    const languages = useSelector((state) => state.languages);
    const title = useSelector((state) => state.title);
    const page = useSelector((state) => state.page);
    
    useEffect(() => {
      let cancel
      axios.get(`${currentPageUrl}?p=${page}&languages=${languages}&title=${title}`, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(
        res => {setBackendData(res.data)}
      )
      return cancel
    }, [currentPageUrl, languages, title, page])


    return backendData

}

export default useData