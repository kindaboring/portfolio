import './Hero.css'

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="/headshot.jpg"
          alt="Kyle Cummings"
          className="hero-image"
        />
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Kyle Cummings</span>
        </h1>
        <p className="hero-subtitle">Computer Resources Manager @ Towson University</p>
        {/* <p className="hero-tagline">Cloud & DevOps Engineer</p> */}

        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => scrollToSection('about')} aria-label="Scroll to content">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  )
}

export default Hero
