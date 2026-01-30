import { useState } from 'react'
import './Projects.css'
import Win95Icon from './win95/Win95Icon'
import Win95Dialog from './win95/Win95Dialog'
import Win95Button from './win95/Win95Button'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: 'CIS Tech Hub Platform Modernization (AWS Migration)',
      description: 'Architected and migrated a 7-container internal academic platform from an on-prem GPU workstation to AWS using ECS Fargate, ECR, secure VPC subnets, and IAM best practices. Implemented ALB routing, CloudWatch monitoring, and CI/CD pipelines to deploy Dockerized services including the frontend, auth backend, Nginx proxy, MongoDB, Prometheus/Grafana monitoring stack, and an Ollama-powered LLaMA tutoring model.',
      technologies: ['AWS ECS', 'Fargate', 'ECR', 'VPC', 'IAM', 'ALB', 'CloudWatch', 'CI/CD', 'Docker', 'MongoDB', 'Prometheus', 'Grafana', 'Ollama'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'CIS Tech Hub Platform Development',
      description: 'Designed and developed the full CIS Tech Hub platform from the ground up, building a production-ready 7-container system including a React frontend, Node.js authentication service with PostgreSQL/MongoDB dependencies, Nginx reverse proxy, Ollama-backed LLaMA tutor, and a Prometheus/Grafana monitoring stack. Implemented container networking, environment configuration, RBAC access controls, and secure API routing. Delivered a fully documented, modular codebase enabling future student contributors to extend backend services, integrate SSO, and expand tutoring capabilities.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'Ollama', 'LLaMA', 'Prometheus', 'Grafana', 'RBAC'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'Self-Hosted GitLab CE Deployment for Department CI/CD',
      description: 'Built and managed a self-hosted GitLab CE environment supporting secure private repositories and automated pipelines for department research and instructional applications. Configured runners, access controls, automated build/test workflows, and backup policies.',
      technologies: ['GitLab CE', 'CI/CD', 'Docker', 'Linux', 'Runners', 'Automation'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'Ollama LLaMA Fine-Tuned Course Tutor',
      description: 'Fine-tuned and deployed a LLaMA model on an internal GPU workstation using Ollama and Docker. Integrated the model into the Tech Hub platform with secure API routing, enabling coding assistance, debugging help, and tailored support for programming students.',
      technologies: ['Ollama', 'LLaMA', 'Docker', 'GPU', 'API', 'AI/ML'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'Isolated Security Lab Infrastructure',
      description: 'Designed and built isolated security lab with 6 half-rack setups (HPE ProLiant servers, Cisco 1941 routers, Catalyst 2960X switches) running VMware vSphere for enterprise-scale simulations. Configured Windows Server 2022 (AD/DNS/DHCP), Synology NAS, pfSense firewall, and complete network segmentation separate from university production network.',
      technologies: ['VMware vSphere', 'Windows Server 2022', 'Active Directory', 'pfSense', 'Cisco', 'HPE ProLiant', 'Network Security'],
      github: 'https://github.com/kindaboring'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span className="projects-icon">💼</span>
        <h2>PROJECTS</h2>
      </div>

      <div className="projects-icons">
        {projects.map((project, index) => (
          <Win95Icon
            key={index}
            icon="📁"
            label={project.title}
            onClick={() => setSelectedProject(index)}
          />
        ))}
      </div>

      {selectedProject !== null && (
        <Win95Dialog
          title={projects[selectedProject].title}
          icon="📁"
          onClose={() => setSelectedProject(null)}
          width="600px"
        >
          <div className="project-dialog-content">
            <p className="project-description">{projects[selectedProject].description}</p>

            <div className="project-tech-section">
              <strong>Technologies:</strong>
              <div className="project-tech">
                {projects[selectedProject].technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {projects[selectedProject].github && (
                <Win95Button onClick={() => window.open(projects[selectedProject].github, '_blank')}>
                  View on GitHub
                </Win95Button>
              )}
              {projects[selectedProject].link && (
                <Win95Button onClick={() => window.open(projects[selectedProject].link, '_blank')}>
                  Live Demo
                </Win95Button>
              )}
            </div>
          </div>
        </Win95Dialog>
      )}
    </section>
  )
}

export default Projects
