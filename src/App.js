import logo from './logo.svg';
import './App.css';
import {BrowserRouter as BRouter, Routes as Rtes , Route as Rte} from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import AppInfo from './pages/AppInfo'
import Portfolio  from './components/Portfolio'
import Contact  from './components/Contact'
import Footer  from './components/Footer'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     
      <BRouter>
     
        <Rtes>
          <Rte path='/' element={
            <>
           
            <Header />
            <About />
            <Portfolio />
            <Contact />
            <Link to='/about' >APP INFORMAITON</Link>
            <Footer />
        
            </>
          }/>
           <Rte path="/about" element={<AppInfo />} />
        </Rtes>
      
      </BRouter>
    </div>
  );
}

export default App;
