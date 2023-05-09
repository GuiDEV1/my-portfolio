import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
