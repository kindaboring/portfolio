import { useState } from 'react'
import './Skills.css'
import Win95Icon from './win95/Win95Icon'
import Win95Panel from './win95/Win95Panel'

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: '☁️',
      skills: ['AWS', 'Azure', 'GCP']
    },
    {
      title: 'Compute & Serverless',
      icon: '⚡',
      skills: ['EC2', 'Lambda']
    },
    {
      title: 'Networking & Security',
      icon: '🔒',
      skills: ['VPC', 'IAM', 'API Gateway']
    },
    {
      title: 'Containers & Orchestration',
      icon: '📦',
      skills: ['Docker', 'Docker Compose', 'Kubernetes (EKS)', 'ECS', 'ECR']
    },
    {
      title: 'Databases & Storage',
      icon: '🗄️',
      skills: ['DynamoDB', 'RDS', 'S3', 'SQL', 'MongoDB']
    },
    {
      title: 'DevOps & Automation',
      icon: '⚙️',
      skills: ['Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Ansible', 'Python', 'Bash', 'PowerShell']
    },
    {
      title: 'Monitoring & Logging',
      icon: '📊',
      skills: ['Prometheus', 'Grafana', 'CloudWatch']
    },
    {
      title: 'Systems & Infrastructure',
      icon: '🖥️',
      skills: ['Linux (RHEL/Ubuntu)', 'Windows Server', 'VMware', 'Nginx', 'Jamf']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <span className="skills-icon">⚡</span>
        <h2>SKILLS.SYS</h2>
      </div>

      <div className="skills-icons">
        {skillCategories.map((category, index) => (
          <Win95Icon
            key={index}
            icon={category.icon}
            label={category.title}
            selected={selectedCategory === index}
            onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
          />
        ))}
      </div>

      {selectedCategory !== null && (
        <Win95Panel variant="sunken" className="skills-detail">
          <h3>{skillCategories[selectedCategory].title}</h3>
          <div className="skills-tags">
            {skillCategories[selectedCategory].skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </Win95Panel>
      )}
    </section>
  )
}

export default Skills
