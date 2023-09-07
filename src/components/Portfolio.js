
import ButtonLink from './ButtonLink'
import tea from '../assets/images/tea.webp'
const Portfolio = () => {
  return (

    <section id="portfolio-section">
    <div className="portfolio">
        <h2 className="portfolio__heading--h2">MY PORTFOLIO</h2>
        <div className="portfolio__container ">
            <div className="portfolio__img"  >
                <a href="https://kg-2023.github.io/RL-TeaShop/" target="_blank"> 
                 <img src={tea} alt="Tea Shp" />

               
                </a>
            </div>
            <div className="portfolio__img"  >
                <img loading="lazy"
                    src="https://github.com/KG-2023/Activity-Images-2023/blob/main/pexels-kat-smith-551628.jpg?raw=true"
                    alt="smiling dog" />
            </div>
            <div className="portfolio__img"><a href="https://html-form-flax.vercel.app/" target="_blank"><img loading="lazy"
                src="https://github.com/KG-2023/Activity-Images-2023/blob/main/pexels-fauxels-3184418.jpg?raw=true"
                alt="team of people" /></a>
            </div>
            <div className="portfolio__img">
                <img loading="lazy"
                        src="https://github.com/KG-2023/Activity-Images-2023/blob/main/pexels-fauxels-3184418.jpg?raw=true"
                        alt="team of people" />
            </div>
        </div>
        <ButtonLink />
    </div>
</section>
    
    
  )
}

export default Portfolio