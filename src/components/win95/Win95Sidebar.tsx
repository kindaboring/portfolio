import { useState } from 'react'
import './Win95Sidebar.css'

interface Win95SidebarProps {
  currentSection: string
  onNavigate: (section: string) => void
}

function Win95Sidebar({ currentSection, onNavigate }: Win95SidebarProps) {
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(true)

  const sections = [
    { id: 'about', label: 'About', icon: '📄' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'certifications', label: 'Certs', icon: '🎓' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '✉️' }
  ]

  return (
    <div className="win95-sidebar">
      <div className="win95-treeview">
        <div className="win95-treeview-item">
          <span className="win95-treeview-expander"></span>
          <span className="win95-folder-icon">🖥️</span>
          <span>Desktop</span>
        </div>
        <div className="win95-treeview-item" style={{ paddingLeft: '18px' }}>
          <span
            className="win95-treeview-expander"
            onClick={(e) => {
              e.stopPropagation()
              setIsPortfolioExpanded(!isPortfolioExpanded)
            }}
          >
            {isPortfolioExpanded ? '−' : '+'}
          </span>
          <span className="win95-folder-icon">📁</span>
          <span>Portfolio</span>
        </div>
        {isPortfolioExpanded && sections.map((section) => (
          <div
            key={section.id}
            className={`win95-treeview-item ${currentSection === section.id ? 'selected' : ''}`}
            style={{ paddingLeft: '36px' }}
            onClick={() => onNavigate(section.id)}
          >
            <span className="win95-treeview-expander"></span>
            <span className="win95-folder-icon">{section.icon}</span>
            <span>{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Win95Sidebar
