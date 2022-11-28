import './App.css';
import useData from './hooks/useData'
function App() {
  const hookData = useData()
  
  return (
      <div>
      <p>{hookData.total}</p>
      <a id="totop" href="#toppoint">^</a>
      </div>
  );
}

export default App;
