const HeaderImg = () => {
  return (
        <>
        
            
            <div className="header__image--sm">
                    <img src="https://github.com/KG-2023/Activity-Images-2023/blob/main/pexels-royal-anwar-450213.jpg?raw=true"
                        alt="header image small" loading="lazy" />
            </div>

            <div className="header__heading--desktop">
                <h1 className="header__heading--h1">Rodrigo Lopez</h1>
                <h2 className="header__heading--h2">Freelance Front-end Web Developer</h2>
            </div>
            <div className="header__heading--mobile">
                <h1 className="header__heading--h1">WEB DEVELOPER</h1>
                <h2 className="header__heading--h2">Hi, I am <span className="header__heading--span1">Rodrigo Lopez</span>
                    
                    <span className="header__heading--span2">Let's Connect</span>
                </h2>
            </div></>
  )
}

export default HeaderImg