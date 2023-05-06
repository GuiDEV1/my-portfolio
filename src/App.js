import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Portfolio />
    </div>
  );
}

export default App;
