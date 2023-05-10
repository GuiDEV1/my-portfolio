import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About';
import Skils from './components/Skils';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Portfolio />
      <About />
      <Skils />
    </div>
  );
}

export default App;
