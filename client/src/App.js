import './App.css';
import './Colors.css'
import MainGrid from './components/MainGrid/MainGrid'
import Welcome from './components/Welcome/Welcome'
import Navigation from './components/Navigation/Navigation'

function App() {
 
  return (
    <div id="maindiv">
      <Navigation />
      <Welcome />
      <MainGrid />
    </div>
  );
}

export default App;
