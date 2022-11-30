import './App.css';
import useData from './hooks/useData'
import Empty from './Empty'
import PgBtnPair from './components/MainGrid/PgBtnPair'
import MainGrid from './components/MainGrid/MainGrid'

function App() {
  const {projects, total} = useData()
  return (
      <div>
      {
        (typeof projects === 'undefined') ? 
        (<Empty emptyClass={"loading"} message={"Loading"}/>) : 
        (total === 0) ? ( <Empty emptyClass={"notfound"} message={"No Results"} /> ) : 
        (
          projects.map((project) => {
            return (<MainGrid project={project} />)
          })
      )}
      <div><PgBtnPair /></div>
      </div>
  );
}

export default App;
