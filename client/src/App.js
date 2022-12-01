import './App.css';
import './Colors.css'
import MainGrid from './components/MainGrid/MainGrid'
import Welcome from './components/Welcome/Welcome'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contact/Contact'

function App() {
 
  return (
    <div id="maindiv">
      <Navigation />
      <Welcome />
      <MainGrid />
      <Contact />
    </div>
  );
}

export default App;
