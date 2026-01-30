import './Certifications.css'
import Win95Panel from './win95/Win95Panel'
import Win95Button from './win95/Win95Button'

interface Certification {
  name: string
  issuer: string
  date?: string
  status: 'earned' | 'in-progress'
  credentialId?: string
  badgeUrl?: string
  verifyUrl?: string
}

function Certifications() {
  const certifications: Certification[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      status: 'earned',
      credentialId: 'CLF-C02',
      date: 'October 2025',
      verifyUrl: 'https://www.credly.com/badges/ebec7816-3d4c-4269-b1d6-a472d8747997/linked_in_profile'
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
      <div className="certifications-header">
        <span className="certifications-icon">🎓</span>
        <h2>CERTIFICATIONS</h2>
      </div>

      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <Win95Panel key={index} variant="raised" className="certification-card">
            <div className="certification-content">
              <div className="certification-icon">
                {cert.status === 'earned' ? '✓' : '⏳'}
              </div>
              <div className="certification-info">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="certification-credential">ID: {cert.credentialId}</p>
                )}
                {cert.date && (
                  <p className="certification-date">{cert.date}</p>
                )}
              </div>
            </div>
            <div className="certification-footer">
              <span className={`certification-status ${cert.status}`}>
                {cert.status === 'earned' ? '✓ Certified' : '⏳ In Progress'}
              </span>
              {cert.verifyUrl && (
                <Win95Button onClick={() => window.open(cert.verifyUrl, '_blank')}>
                  Verify
                </Win95Button>
              )}
            </div>
          </Win95Panel>
        ))}
      </div>
    </section>
  )
}

export default Certifications
