import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Hero from './Components/Hero/Hero';
import Main from './Components/Main/Main';


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
