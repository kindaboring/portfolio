export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  timestamp: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "CIS Tech Hub",
    description: "A centralized web platform for Towson University's CIS department, giving students access to academic resources, technical support, and AI-powered assistance — built with React, Docusaurus, Docker, and an integrated Ollama AI backend.",
    tags: ["TypeScript", "React", "Docker", "CI/CD"],
    githubUrl: "https://github.com/kindaboring/cistechhub",
    timestamp: "Mar 2025",
    image: "/techhub.jpg",
  },
  {
    id: "2",
    title: "AWS Migration",
    description: "Production-grade AWS infrastructure for CIS Tech Hub, fully automated end-to-end with Terraform for provisioning, Ansible for configuration management, and GitHub Actions for CI/CD — featuring SSM-based access, security scanning, and manual approval gates for production deployments.",
    tags: ["Terraform", "AWS", "Ansible", "GitHub Actions"],
    githubUrl: "https://github.com/kindaboring/cistechhub-infrastructure",
    timestamp: "Mar 2025",
    image: "/aws-infrastructure.png",
  },
];
