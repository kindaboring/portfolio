import { useState } from 'react'
import './App.css'
import Win95Window from './components/win95/Win95Window'
import Win95TitleBar from './components/win95/Win95TitleBar'
import Win95MenuBar from './components/win95/Win95MenuBar'
import Win95Toolbar from './components/win95/Win95Toolbar'
import Win95Sidebar from './components/win95/Win95Sidebar'
import Win95ContentArea from './components/win95/Win95ContentArea'
import Win95StatusBar from './components/win95/Win95StatusBar'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'

type Section = 'about' | 'skills' | 'certifications' | 'projects' | 'contact'

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('about')

  const navigateToSection = (section: string) => {
    setCurrentSection(section as Section)
  }

  const getItemCount = (section: Section): number => {
    switch (section) {
      case 'about':
        return 3 // 3 highlight items
      case 'skills':
        return 8 // 8 skill categories
      case 'certifications':
        return 2 // 2 certifications
      case 'projects':
        return 5 // 5 projects
      case 'contact':
        return 3 // 3 contact methods
      default:
        return 0
    }
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'certifications':
        return <Certifications />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <Win95Window>
      <Win95TitleBar title="Portfolio - File Explorer" icon="📁" />
      <Win95MenuBar onNavigate={navigateToSection} />
      <Win95Toolbar onNavigate={navigateToSection} currentSection={currentSection} />
      <div className="win95-main-content">
        <Win95Sidebar currentSection={currentSection} onNavigate={navigateToSection} />
        <Win95ContentArea currentSection={currentSection}>
          {renderSection()}
        </Win95ContentArea>
      </div>
      <Win95StatusBar currentSection={currentSection} itemCount={getItemCount(currentSection)} />
    </Win95Window>
  )
}

export default App
