import './App.css';
import './Colors.css'
import MainGrid from './components/MainGrid/MainGrid'
import Welcome from './components/Welcome/Welcome'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
function App() {
 
  return (
    <div id="full-container">
      <Navigation />
      <Welcome />
      <About />
      <MainGrid />
      <Contact />
    </div>
  );
}

export default App;
