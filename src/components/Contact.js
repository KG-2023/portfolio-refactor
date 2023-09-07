const Contact = () => {
  return (
    <section id="contact-section">
        <div className="contact">
            <div className="contact__container">
                <div className="contact__row">
                    <div className="contact__row--left">
                        <h2 className="contact__heading--h2">Contact Me</h2>
                        <p><i className="fa-sharp fa-solid fa-envelope-circle-check"></i>youremail@test.com</p>
                        <p><i className="fa-sharp fa-solid fa-phone"></i>0927000000</p>
                        <div className="contact__left--icons">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <a href="downloads/sample.pdf" download className="contact__btn contact__btn--1">Download CV</a>
                    </div>
                    <div className="contact__row--right">
                        <form action="#">
                            <input type="text" placeholder="Your name"/>
                            <input type="email" placeholder="Your email" />
                            <textarea name="#" id="#" cols="30" rows="10" placeholder="Your Message">
                        </textarea>
                            <button type="submit" className="contact__btn contact__btn--2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact