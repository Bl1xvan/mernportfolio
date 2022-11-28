import './App.css';
import useData  from './hooks/useData'
function App() {
  const {backendData} = useData()
  return (
      <div>
      <h1>{backendData.total}</h1>
      <a id="totop" href="#toppoint">^</a>
      </div>
  );
}

export default App;
