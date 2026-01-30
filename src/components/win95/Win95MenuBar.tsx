import { useState, useEffect, useRef } from 'react'
import './Win95MenuBar.css'

interface Win95MenuBarProps {
  onNavigate?: (section: string) => void
}

function Win95MenuBar({ onNavigate }: Win95MenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeMenu])

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  const handleNavigateClick = (section: string) => {
    onNavigate?.(section)
    setActiveMenu(null)
  }

  return (
    <div className="win95-menu-bar" ref={menuBarRef}>
      <div className="win95-menu-item" onClick={() => handleMenuClick('file')}>
        File
        {activeMenu === 'file' && (
          <div className="win95-dropdown">
            <div className="win95-menu-dropdown-item disabled">New</div>
            <div className="win95-menu-dropdown-item disabled">Open</div>
            <div className="win95-divider" />
            <div className="win95-menu-dropdown-item disabled">Close</div>
          </div>
        )}
      </div>

      <div className="win95-menu-item" onClick={() => handleMenuClick('edit')}>
        Edit
        {activeMenu === 'edit' && (
          <div className="win95-dropdown">
            <div className="win95-menu-dropdown-item disabled">Undo</div>
            <div className="win95-divider" />
            <div className="win95-menu-dropdown-item disabled">Cut</div>
            <div className="win95-menu-dropdown-item disabled">Copy</div>
            <div className="win95-menu-dropdown-item disabled">Paste</div>
          </div>
        )}
      </div>

      <div className="win95-menu-item" onClick={() => handleMenuClick('view')}>
        View
        {activeMenu === 'view' && (
          <div className="win95-dropdown">
            <div className="win95-menu-dropdown-item disabled">Toolbar</div>
            <div className="win95-menu-dropdown-item disabled">Status Bar</div>
            <div className="win95-divider" />
            <div className="win95-menu-dropdown-item disabled">Large Icons</div>
            <div className="win95-menu-dropdown-item disabled">Small Icons</div>
            <div className="win95-menu-dropdown-item disabled">List</div>
            <div className="win95-menu-dropdown-item disabled">Details</div>
          </div>
        )}
      </div>

      <div className="win95-menu-item" onClick={() => handleMenuClick('navigate')}>
        Navigate
        {activeMenu === 'navigate' && (
          <div className="win95-dropdown">
            <div className="win95-menu-dropdown-item" onClick={() => handleNavigateClick('about')}>
              About
            </div>
            <div className="win95-menu-dropdown-item" onClick={() => handleNavigateClick('skills')}>
              Skills
            </div>
            <div className="win95-menu-dropdown-item" onClick={() => handleNavigateClick('certifications')}>
              Certifications
            </div>
            <div className="win95-menu-dropdown-item" onClick={() => handleNavigateClick('projects')}>
              Projects
            </div>
            <div className="win95-menu-dropdown-item" onClick={() => handleNavigateClick('contact')}>
              Contact
            </div>
          </div>
        )}
      </div>

      <div className="win95-menu-item" onClick={() => handleMenuClick('help')}>
        Help
        {activeMenu === 'help' && (
          <div className="win95-dropdown">
            <div className="win95-menu-dropdown-item disabled">Help Topics</div>
            <div className="win95-divider" />
            <div className="win95-menu-dropdown-item disabled">About Portfolio</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Win95MenuBar
