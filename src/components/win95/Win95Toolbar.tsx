import './Win95Toolbar.css'

interface Win95ToolbarProps {
  onNavigate?: (section: string) => void
  currentSection?: string
}

function Win95Toolbar({ onNavigate, currentSection }: Win95ToolbarProps) {
  const sections = ['about', 'skills', 'certifications', 'projects', 'contact']
  const currentIndex = sections.indexOf(currentSection || 'about')

  const handleBack = () => {
    if (currentIndex > 0) {
      onNavigate?.(sections[currentIndex - 1])
    }
  }

  const handleForward = () => {
    if (currentIndex < sections.length - 1) {
      onNavigate?.(sections[currentIndex + 1])
    }
  }

  const handleUp = () => {
    onNavigate?.('about')
  }

  return (
    <div className="win95-toolbar">
      <button
        className="win95-toolbar-button"
        onClick={handleBack}
        disabled={currentIndex === 0}
        aria-label="Back"
        title="Back"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M10 3 L5 8 L10 13 Z" />
        </svg>
      </button>

      <button
        className="win95-toolbar-button"
        onClick={handleForward}
        disabled={currentIndex === sections.length - 1}
        aria-label="Forward"
        title="Forward"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M6 3 L11 8 L6 13 Z" />
        </svg>
      </button>

      <button
        className="win95-toolbar-button"
        onClick={handleUp}
        aria-label="Up"
        title="Up One Level"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 3 L3 8 L6 8 L6 13 L10 13 L10 8 L13 8 Z" />
        </svg>
      </button>

      <div className="win95-toolbar-separator" />

      <button className="win95-toolbar-button" aria-label="View Options" title="View Options">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <rect x="2" y="2" width="4" height="4" />
          <rect x="10" y="2" width="4" height="4" />
          <rect x="2" y="10" width="4" height="4" />
          <rect x="10" y="10" width="4" height="4" />
        </svg>
      </button>
    </div>
  )
}

export default Win95Toolbar
