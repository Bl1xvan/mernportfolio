import {useEffect, useState} from "react"
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}])
  const [page, setPage] = useState(1)
  const [langValue, setLangValue] = useState("JS")
  const [title, setTitle] = useState("Vowel-Counter")
  useEffect(() => {
    fetch(`/api/v1/projects?p=${page}&languages=${langValue}&title=${title}`).then(
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
          const {title, repository, description, _id, deployment, image, languages} = project;
          return (
                  <OneProject 
                      key={_id} 
                      title={title} 
                      repo={repository} 
                      desc={description} 
                      depl={deployment}
                      img={image}
                      lang={languages}
                      />         
                  )
      })
      )}
      <a id="totop" href="#toppoint">^</a>
    </div>
  );
}

export default App;
