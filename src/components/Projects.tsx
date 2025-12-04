import './Projects.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'Tech Hub AWS Migration',
      description: 'Migrated a 7-container internal Tech Hub platform to AWS, deploying frontend, auth backend, Nginx proxy, Ollama LLM, MongoDB, Prometheus, and Grafana using ECS, ECR, VPC, IAM, and ALB. Implemented CI/CD pipelines and CloudWatch alerts for comprehensive monitoring.',
      technologies: ['AWS ECS', 'Docker', 'MongoDB', 'Prometheus', 'Grafana', 'Nginx', 'CI/CD'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'Dockerized Internal Web Platform',
      description: 'Designed and deployed a Dockerized internal web platform supporting student learning and faculty administration, including authentication services, backend APIs, and secure Nginx routing. Integrated with university systems for seamless user management.',
      technologies: ['Docker', 'Docker Compose', 'Nginx', 'Authentication', 'REST APIs'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'Self-hosted GitLab CE Instance',
      description: 'Built and managed a self-hosted GitLab Community Edition instance, enabling departmental CI/CD pipelines, secure repository access, and automated build/test workflows. Supports development teams across multiple projects and courses.',
      technologies: ['GitLab CI/CD', 'Linux', 'Docker', 'Automation', 'Version Control'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'Ollama LLaMA AI Model Deployment',
      description: 'Fine-tuned and deployed an Ollama-based LLaMA model to provide coding assistance and tutoring capabilities for programming courses. Integrated with web platform for student access and implemented monitoring for usage analytics.',
      technologies: ['Ollama', 'LLaMA', 'Docker', 'Python', 'AI/ML'],
      github: 'https://github.com/kindaboring'
    },
    {
      title: 'System Provisioning Automation',
      description: 'Automated system provisioning using Bash, Python, PowerShell, and Ansible, reducing deployment time for labs and hardware environments. Created reusable playbooks and scripts for rapid infrastructure setup across 100+ systems.',
      technologies: ['Ansible', 'Python', 'Bash', 'PowerShell', 'Automation'],
      github: 'https://github.com/kindaboring'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">
        <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        Featured Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
