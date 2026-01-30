import './Win95ContentArea.css'

interface Win95ContentAreaProps {
  currentSection: string
  children: React.ReactNode
}

function Win95ContentArea({ currentSection, children }: Win95ContentAreaProps) {
  const pathMap: Record<string, string> = {
    about: 'Desktop\\Portfolio\\About',
    skills: 'Desktop\\Portfolio\\Skills',
    certifications: 'Desktop\\Portfolio\\Certs',
    projects: 'Desktop\\Portfolio\\Projects',
    contact: 'Desktop\\Portfolio\\Contact'
  }

  return (
    <div className="win95-content-area-wrapper">
      <div className="win95-address-bar">
        <span className="win95-address-label">Address:</span>
        <div className="win95-address-field">
          <span className="win95-folder-icon-small">📁</span>
          <span>{pathMap[currentSection] || 'Desktop\\Portfolio'}</span>
        </div>
      </div>
      <div className="win95-content-inner">
        {children}
      </div>
    </div>
  )
}

export default Win95ContentArea
