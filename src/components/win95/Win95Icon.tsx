import './Win95Icon.css'

interface Win95IconProps {
  icon: string | React.ReactNode
  label: string
  onClick?: () => void
  selected?: boolean
}

function Win95Icon({ icon, label, onClick, selected = false }: Win95IconProps) {
  return (
    <div
      className={`win95-icon ${selected ? 'selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
    >
      <div className="win95-icon-image">
        {typeof icon === 'string' ? <span style={{ fontSize: '32px' }}>{icon}</span> : icon}
      </div>
      <div className="win95-icon-label">{label}</div>
    </div>
  )
}

export default Win95Icon
