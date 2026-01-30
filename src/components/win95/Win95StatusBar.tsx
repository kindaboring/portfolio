import './Win95StatusBar.css'

interface Win95StatusBarProps {
  itemCount?: number
  currentSection?: string
}

function Win95StatusBar({ itemCount = 0, currentSection = 'about' }: Win95StatusBarProps) {
  const sectionNames: Record<string, string> = {
    about: 'About Me',
    skills: 'Technical Skills',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact Information'
  }

  return (
    <div className="win95-status-bar">
      <div className="win95-status-bar-field">
        {itemCount} {itemCount === 1 ? 'item' : 'items'}
      </div>
      <div className="win95-status-bar-field win95-status-section">
        {sectionNames[currentSection] || currentSection}
      </div>
    </div>
  )
}

export default Win95StatusBar
