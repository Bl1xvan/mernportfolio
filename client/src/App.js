import './App.css';
import { useData } from './hooks/useData'
function App() {
  const {pageCount} = useData()
  return (
      <div>
      <h1>{pageCount}</h1>
      <a id="totop" href="#toppoint">^</a>
      </div>
  );
}

export default App;
