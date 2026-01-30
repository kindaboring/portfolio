import './Win95Button.css'

interface Win95ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Win95Button({ children, onClick, disabled = false, type = 'button', className = '' }: Win95ButtonProps) {
  return (
    <button
      type={type}
      className={`win95-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Win95Button
