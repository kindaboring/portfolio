import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS (EC2, ECS, Lambda, S3, IAM, VPC)', 'AWS (API Gateway, DynamoDB, RDS)', 'Azure', 'GCP']
    },
    {
      title: 'DevOps & Automation',
      skills: ['Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Ansible', 'Python (Boto3)', 'Bash', 'PowerShell']
    },
    {
      title: 'Containers & Orchestration',
      skills: ['Docker', 'Docker Compose', 'Kubernetes (EKS)', 'ECS', 'ECR']
    },
    {
      title: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'CloudWatch', 'AlertManager']
    },
    {
      title: 'Systems & Infrastructure',
      skills: ['Linux (RHEL/Ubuntu)', 'Windows Server', 'VMware', 'Nginx', 'Jamf', 'Active Directory']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'DynamoDB', 'SQL', 'RDS']
    },
    {
      title: 'Networking & Security',
      skills: ['VPC', 'Load Balancers (ALB)', 'IAM', 'Security Groups', 'Route53']
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Python', 'TypeScript']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">
        <svg className="section-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        Skills & Technologies
      </h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
