import {useEffect, useState} from "react"
import './App.css';
import Empty from "./Empty"

function App() {
  const [backendData, setBackendData] = useState([{}])
  const [page, setPage] = useState(1)
  const [langValue, setLangValue] = useState("")
  const [title, setTitle] = useState("")
  useEffect(() => {
    fetch(`https://mernportfolio.onrender.com/api/v1/projects?p=${page}&languages=${langValue}&title=${title}`).then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [page, langValue, title])
  return (
    <div className="allprojects">
      {(typeof backendData.projects === 'undefined') ? (
        <Empty emptyClass={"loading"} message={"Loading"}/>
      ) : (backendData.total === 0) ? ( <Empty emptyClass={"notfound"} message={"No Results"} /> ) : (
        backendData.projects.map((project) => {
          const {title,languages} = project;
          return (<div>{title} {languages}</div>        
                  )
              })
      )}
      <a id="totop" href="#toppoint">^</a>
    </div>
  );
}

export default App;
