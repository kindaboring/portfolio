const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const contactMediums = [
  {
    medium: "github",
    username: "kindaboring",
    link: "https://github.com/kindaboring",
  },
  {
    medium: "email",
    username: "kyle.cummings095@gmail.com",
    link: "mailto:kyle.cummings095@gmail.com",
  },
  {
    medium: "linkedin",
    username: "kindaboring",
    link: "https://www.linkedin.com/in/kindaboring/",
  },
];

const getProjects = [
    {
      name: "Portfolio",
      description:
        "My portfolio! Written in NextJS using the React framework and Tailwind CSS.",
      stack: ["NextJS", "React", "Tailwind"],
      link: "https://github.com/kindaboring/portfolio",
    },    
    {
      name: "TechHub Website",
      description:
        "A SharePoint site providing how-to documents, IDE packages, VMs, and other course-specific resources for students within the Department of Computer & Information Sciences at Towson University.",
      stack: ["PowerShell", "Power Automate"],
      link: "https://towson.edu/cistechhub",
    },
    {
      name: "TechHub Discord Bot",
      description:
        "A Python bot for the Towson University CIS TechHub Discord.",
      stack: ["Python"],
      link: "https://github.com/kindaboring/techhub-bot",
    },
    {
      name: "Networking/Security Lab",
      description:
        "Redesigned and implemented a new system architecture for Towson University's Computer and Information Sciences networking and security lab.",
      stack: ["PowerShell", "VMware", "Linux"],
      link: "https://www.linkedin.com/in/kindaboring/details/projects/"
    }
];

// async function getProjects() {
//   const projects = await (await fetch("/api/projects")).json();
//   const projectHTML = `<h3>My Projects</h3>` +
//     projects
//       .map(
//         (project) => `<div class="command">
//         <a href="${project.link}" target="_blank"><b class="command">${project.name}</b></a> - <b>${project.stack.join(", ")}</b>
//         <p class="meaning">${project.description}</p><br/>
//       </div>`
//       )
//       .join("");
//   return projectHTML;
// }

// const getContacts = async () => {
//   const contactMediums = await (await fetch("/api/contacts")).json();
//   return contactMediums
//     .map(
//       (contact) => `<div style="display: flex; justify-content: space-between;">
//       <p style="font-size: 15px">${contact.medium}</p>
//       <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
//     </div>`
//     )
//     .join("");
// };

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 16px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `Hi! My name is Kyle. I am the Computer Resources Manager for the <a href="https://towson.edu/cis" target="_blank">Computer & Information Sciences</a> department at <a href="https://towson.edu" target="_blank">Towson University</a>.
    <br/><br/>
    With over <b>7 years</b> of experience in IT, I have demonstrated proficiency in system administration, cloud services, scripting, and automation. 
    <br/><br/>
    My career achievements include successfully overseeing complex IT infrastructures, implementing and optimizing cloud-based solutions, and developing efficient scripting and automation processes. 
    <br/><br/>
    In my spare time I enjoy photography, going to the gym, playing guitar, and expanding my technical knowledge.
  `,
  education:
    () => `I graduated from <a href="https://towson.edu/" target="_blank">Towson University</a> with a Bachelor of Science in Information Technology.`,
  skills: () => `
  As a previous sysadmin and current manager, I have demonstrated proficiency in system administration, cloud services, scripting, and automation:<br /><br />
  <div class="skill"><b><span style="color: var(--secondary)">Cloud Platforms</b></span>: Azure, AWS, GCP<br /></div>
  <div class="skill"><b><span style="color: var(--secondary)">Scripting Languages</b></span>: Python, Bash, PowerShell, React, NextJS<br /></div>
  <div class="skill"><b><span style="color: var(--secondary)">System Administration</b></span>: Linux, Windows, MacOS, VMWare, Docker, Ansible, Git<br /></div>
  <div class="skill"><b><span style="color: var(--secondary)">Database</b></span>: MongoDB, PostgreSQL, MySQL, and SQLite<br /></div><br />
  I also have some experience with Machine Learning using Python, TensorFlow, and PyTorch to fine-tune a LLM for predictive analysis of plagiarism.<br />
  `,
  //projects: getProjects,
  projects: () =>
    getProjects.map(
      (project) => `<div class="command">
      <a href="${project.link}" target="_blank"><b class="command">${project.name}</b></a> - <b>${project.stack.join(", ")}</b>
      <p class="meaning">${project.description}</p><br/>
       </div>`
    )
    .join(""),
  // contact: getContacts,
  contact: () => 
    contactMediums.map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 16px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
      </div>`
  )
  .join(""),
  resume: () => {
    window.open("https://github.com/kindaboring/portfolio/blob/main/public/resume.pdf", "_blank");
    return "";
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};