const About = () => {
  return (
    <>
      <section id="about-section">
        <div className="about">
            <div className="about__img">
                <img src="https://github.com/KG-2023/Activity-Images-2023/blob/main/pexels-royal-anwar-6981883.jpg?raw=true" alt="about mobile image" loading="lazy" />
            </div>
            <div className="about__heading">
                <h2 className="about__heading--h2">ABOUT ME</h2>
                <p className="about__heading--paragraph">I am a computer scientis, a part-time NSTP and full-stack web developer
                    instructor, I am also a certified safety officer and indie game developer of Datu's Quest.</p>
            </div>
            <div className="about__skills">
                <h3 className="about__skills-h3 about__skills-h3--1">Skills</h3>
                <h3 className="about__skills-h3 about__skills-h3--2">Experience</h3>
                <h3 className="about__skills-h3 about__skills-h3--3">Education</h3>
            </div>
            <div className="about__content">
                <h3 className="about__content-h3">HTML & CSS</h3>
                <p className="about__paragraph">Build websites with HTML & CSS</p>
            </div>

        </div>
    </section>
    </>
  )
}

export default About