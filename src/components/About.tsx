import './About.css'
import Win95Panel from './win95/Win95Panel'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <span className="about-icon">👤</span>
        <h2>README.TXT</h2>
      </div>

      <div className="about-main">
        <Win95Panel variant="sunken" className="about-photo-container">
          <img src="/headshot.jpg" alt="Kyle Cummings" className="about-photo" />
        </Win95Panel>

        <Win95Panel variant="sunken" className="about-document">
          <div className="about-text">
            <p>
              <strong>Name:</strong> Kyle Cummings
            </p>
            <p>
              <strong>Experience:</strong> 7+ years
            </p>
            <p>
              <strong>Current Role:</strong> Computer Resources Manager at Towson University
            </p>

            <div className="about-divider" />

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
          </div>
        </Win95Panel>
      </div>

      <div className="about-highlights">
        <Win95Panel variant="raised" className="highlight-item">
          <h3>📊 7+ Years Experience</h3>
          <p>Progressive IT experience in systems administration and cloud engineering</p>
        </Win95Panel>

        <Win95Panel variant="raised" className="highlight-item">
          <h3>☁️ Hybrid Infrastructure</h3>
          <p>Managing on-prem and cloud environments with AWS and Azure</p>
        </Win95Panel>

        <Win95Panel variant="raised" className="highlight-item">
          <h3>👥 Team Leadership</h3>
          <p>Leading and training 15+ member technical teams</p>
        </Win95Panel>
      </div>
    </section>
  )
}

export default About
