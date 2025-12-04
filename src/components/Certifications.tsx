import './Certifications.css'

interface Certification {
  name: string
  issuer: string
  date?: string
  status: 'earned' | 'in-progress'
  credentialId?: string
  badgeUrl?: string
}

function Certifications() {
  const certifications: Certification[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      status: 'earned',
      credentialId: 'CLF-C02',
      date: 'October 2025'
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      status: 'in-progress',
      credentialId: 'SAA-C03'
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">
        <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
        Certifications
      </h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className={`certification-card ${cert.status}`}>
            <div className="certification-header">
              <div className="certification-icon">
                {cert.status === 'earned' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                )}
              </div>
              <span className="certification-status">
                {cert.status === 'earned' ? 'Certified' : 'In Progress'}
              </span>
            </div>
            <h3 className="certification-name">{cert.name}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
            {cert.date && (
              <p className="certification-date">Earned: {cert.date}</p>
            )}
            {cert.credentialId && (
              <p className="certification-credential">ID: {cert.credentialId}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
