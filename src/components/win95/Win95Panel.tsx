import './Win95Panel.css'

interface Win95PanelProps {
  children: React.ReactNode
  variant?: 'default' | 'sunken' | 'raised'
  className?: string
}

function Win95Panel({ children, variant = 'sunken', className = '' }: Win95PanelProps) {
  const variantClass = variant === 'default' ? 'win95-panel' : `win95-panel-${variant}`

  return (
    <div className={`${variantClass} ${className}`}>
      {children}
    </div>
  )
}

export default Win95Panel
