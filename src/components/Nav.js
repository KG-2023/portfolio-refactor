const Nav = () => {
  return (
    <nav className="fixed-top header__nav navbar navbar-expand-lg bg-dark navbar-dark"
    >
    <div className="container-fluid">
        <a href="#" className="header__brand navbar-brand">PORT<span
                className="header__brand--span">FOLIO</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><a href="#home-section" >Home</a></li>
                <li className="nav-item"><a href="#about-section">About</a></li>
                <li className="nav-item"><a href="#portfolio-section"  rel="noopener">Portfolio</a></li>
                <li className="nav-item"><a href="#contact-section">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Nav