import './Win95TitleBar.css'

interface Win95TitleBarProps {
  title: string
  icon?: string
}

function Win95TitleBar({ title, icon }: Win95TitleBarProps) {
  return (
    <div className="win95-title-bar">
      <div className="win95-title-bar-text">
        {icon && <span className="win95-title-bar-icon">{icon}</span>}
        <span>{title}</span>
      </div>
      <div className="win95-title-bar-controls">
        <button className="win95-title-bar-button" aria-label="Minimize">
          <span className="win95-minimize-icon">_</span>
        </button>
        <button className="win95-title-bar-button" aria-label="Maximize">
          <span className="win95-maximize-icon">□</span>
        </button>
        <button className="win95-title-bar-button win95-close-button" aria-label="Close">
          <span className="win95-close-icon">✕</span>
        </button>
      </div>
    </div>
  )
}

export default Win95TitleBar
