import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import AboutPage from './pages/AboutPage'
import Portfolio  from './components/Portfolio'
import Contact  from './components/Contact'
import Footer  from './components/Footer'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     
      <Router>
     
        <Routes>
          <Route path='/' element={
            <>
           
            <Header />
            <Link to='/about' >AboutPage</Link>
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        
            </>
          }/>
           <Route path="/about" element={<AboutPage />} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
