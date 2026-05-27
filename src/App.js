import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import Ratings from './components/Ratings';
import Security from './components/Security';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Story/>
      <Features/>
      <Security/>
      <Ratings/>
      <Footer/>
    </div>
  );
}

export default App;
