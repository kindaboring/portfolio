import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">
        <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Cloud-focused Infrastructure & DevOps Engineer with 7+ years of progressive IT experience
            across systems administration, cloud deployment, automation, and containerized platforms. Currently
            serving as Computer Resources Manager at Towson University, I architect and manage hybrid infrastructure
            spanning on-premises servers and cloud technologies.
          </p>
          <p>
            My expertise includes migrating multi-service applications to AWS, building CI/CD pipelines, and
            implementing comprehensive monitoring solutions. I'm passionate about infrastructure as code (IaC),
            container orchestration, and creating scalable systems that support academic and research environments.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <h3>7+ Years Experience</h3>
              <p>Progressive IT experience in systems administration and cloud engineering</p>
            </div>
            <div className="highlight-item">
              <h3>Hybrid Infrastructure</h3>
              <p>Managing on-prem and cloud environments with AWS and Azure</p>
            </div>
            <div className="highlight-item">
              <h3>Team Leadership</h3>
              <p>Leading and training 15+ member technical teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
