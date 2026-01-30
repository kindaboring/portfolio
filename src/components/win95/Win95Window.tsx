import './Win95Window.css'

interface Win95WindowProps {
  children: React.ReactNode
}

function Win95Window({ children }: Win95WindowProps) {
  return (
    <div className="win95-window-container">
      <div className="win95-window">
        {children}
      </div>
    </div>
  )
}

export default Win95Window
