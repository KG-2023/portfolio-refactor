import Nav from './Nav.js'
import HeaderImg from './HeaderImg'
import {useLocation} from 'react-router-dom';

const Header = () => {

    const location = useLocation()
  return (
    <header id="home-section">
        <div className="header">
            <Nav />
            { location.pathname === '/' &&
                <HeaderImg />
            }
            
            

            
        </div>       
    </header>
  )
}

export default Header