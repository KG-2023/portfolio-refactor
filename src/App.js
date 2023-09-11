import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import AboutPage from './components/AboutPage'
import Portfolio  from './components/Portfolio'
import Contact  from './components/Contact'
import Footer  from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
