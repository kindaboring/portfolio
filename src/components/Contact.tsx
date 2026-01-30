import './Contact.css'
import Win95Panel from './win95/Win95Panel'
import Win95Button from './win95/Win95Button'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <span className="contact-icon">✉️</span>
        <h2>CONTACT.INF</h2>
      </div>

      <Win95Panel variant="sunken" className="contact-panel">
        <p className="contact-intro">
          I'm actively seeking new opportunities in Cloud and DevOps engineering.
          Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out!
        </p>
      </Win95Panel>

      <div className="contact-methods">
        <Win95Panel variant="raised" className="contact-method">
          <div className="contact-method-icon">📧</div>
          <div className="contact-method-content">
            <strong>Email</strong>
            <a href="mailto:kyle.cummings095@gmail.com">kyle.cummings095@gmail.com</a>
          </div>
        </Win95Panel>

        <Win95Panel variant="raised" className="contact-method">
          <div className="contact-method-icon">👔</div>
          <div className="contact-method-content">
            <strong>LinkedIn</strong>
            <a href="https://linkedin.com/in/kindaboring" target="_blank" rel="noopener noreferrer">
              /in/kindaboring
            </a>
          </div>
        </Win95Panel>

        <Win95Panel variant="raised" className="contact-method">
          <div className="contact-method-icon">💻</div>
          <div className="contact-method-content">
            <strong>GitHub</strong>
            <a href="https://github.com/kindaboring" target="_blank" rel="noopener noreferrer">
              github.com/kindaboring
            </a>
          </div>
        </Win95Panel>
      </div>

      <div className="contact-action">
        <Win95Button
          className="win95-button-primary win95-button-large"
          onClick={() => window.location.href = 'mailto:kyle.cummings095@gmail.com'}
        >
          Send Email
        </Win95Button>
      </div>
    </section>
  )
}

export default Contact
