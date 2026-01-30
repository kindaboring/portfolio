import { useEffect } from 'react'
import './Win95Dialog.css'

interface Win95DialogProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  icon?: string
  width?: string
  height?: string
}

function Win95Dialog({ title, children, onClose, icon = '📄', width = '500px', height = 'auto' }: Win95DialogProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="win95-dialog-overlay" onClick={onClose}>
      <div
        className="win95-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width, maxHeight: height }}
      >
        <div className="win95-dialog-title-bar">
          <div className="win95-dialog-title">
            <span className="win95-dialog-icon">{icon}</span>
            <span>{title}</span>
          </div>
          <button className="win95-dialog-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="win95-dialog-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Win95Dialog
