const menuList = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  {
    category: "Languages",
    skills: [
      { skill: "JavaScript", level: 4 },
      { skill: "TypeScript", level: 4 },
      { skill: "PHP", level: 3.5 },
      { skill: "C#", level: 3 },
      { skill: "Python", level: 2 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { skill: "Adaptability", level: 4 },
      { skill: "Problem Solving", level: 4 },
      { skill: "Time Management", level: 4.5 },
      { skill: "Team Collaboration", level: 4 },
      { skill: "Continuous Learning", level: 5 },
      { skill: "Strong Communication", level: 3.5 },
    ],
  },
  {
    category: "Technologies",
    skills: [
      { skill: "React.js", level: 3 },
      { skill: "React Native", level: 2 },
      { skill: "Next.js", level: 4 },
      { skill: "Redux", level: 2 },
      { skill: "TailwindCSS", level: 3.5 },
      { skill: "Node.js", level: 4 },
      { skill: "Express.js", level: 4 },
      { skill: "MySQL", level: 4 },
      { skill: "MongoDB", level: 4 },
      { skill: "SQLite", level: 3 },
      { skill: "Vercel", level: 3 },
    ],
  },
];

const portfolio = [
  {
    category: "Web",
    project: [
      {
        name: "Web 1",
        technologiesUsed: ["Nodejs", "PostgreSQL"],
        websiteLink: "PHP",
        gibhubLink: "C#",
        image: "/project-picture.png",
      },
      {
        name: "Web 2",
        technologiesUsed: ["React", "Nodejs"],
        websiteLink: "example.com",
        gibhubLink: "github.com/example",
        image: "/project-picture.png",
      },
    ],
  },
  {
    category: "Mobile",
    project: [
      {
        name: "Mobile 1",
        technologiesUsed: ["TypeScript", "MySQL"],
        websiteLink: "PHP",
        gibhubLink: "C#",
        image: "/project-picture.png",
      },
      {
        name: "Mobile 2",
        technologiesUsed: ["Flutter", "Firebase"],
        websiteLink: "example.com",
        gibhubLink: "github.com/example",
        image: "/project-picture.png",
      },
    ],
  },
  {
    category: "Desktop",
    project: [
      {
        name: "Desktop 1",
        technologiesUsed: ["TypeScript", "MongoDb"],
        websiteLink: "localhost:3000",
        gibhubLink: "localhost:3000",
        image: "/project-picture.png",
      },
      {
        name: "Desktop 2",
        technologiesUsed: ["Electron", "Nodejs"],
        websiteLink: "example.com",
        gibhubLink: "github.com/example",
        image: "/project-picture.png",
      },
    ],
  },
];

export { menuList, skills, portfolio };
