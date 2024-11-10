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

const experience = [
  {
    duration: "2022-2023",
    company: "TechWave Solutions",
    role: "Full Stack Developer",
    technologies: ["Node.js", "React.js", "Express", "MongoDB"],
    description:
      "As a Full Stack Developer at TechWave Solutions, I led the development of dynamic web applications using modern JavaScript frameworks. My responsibilities included full-stack development, including front-end design and back-end architecture, database management with MongoDB, and integrating third-party APIs to improve functionality. I collaborated with cross-functional teams to deliver scalable and user-centric solutions that met client requirements.",
  },
  {
    duration: "2021-2022",
    company: "DigitalSoft Innovations",
    role: "Backend Developer",
    technologies: ["Node.js", "Express", "MySQL", "Redis"],
    description:
      "As a Backend Developer at DigitalSoft Innovations, I focused on building and optimizing server-side systems. I streamlined data processing, improved API performance, and enhanced security protocols. I worked with databases such as MySQL, and implemented Redis for caching to improve data retrieval times, ensuring high availability and scalability of services to handle increasing user loads.",
  },
  {
    duration: "2019-2020",
    company: "SmartTech Hub",
    role: "Junior Developer",
    technologies: ["Node.js", "React.js", "Redux", "CSS"],
    description:
      "I began my career as a Junior Developer at SmartTech Hub, where I contributed to both front-end and back-end development. I worked on building and maintaining web applications, resolving bugs, and optimizing performance. Additionally, I assisted in writing test cases to ensure code quality and participated in regular code reviews, learning industry best practices and development standards.",
  },
  {
    duration: "2018-2019",
    company: "CodeCraft Studios",
    role: "Intern Developer",
    technologies: ["Node.js", "React.js", "Git"],
    description:
      "During my internship at CodeCraft Studios, I gained practical experience in web development and software engineering. I supported senior developers with coding tasks, assisted with version control using Git, and worked on developing basic applications. This role was essential in shaping my foundational knowledge of coding practices and preparing me for a career in software development.",
  },
];

const education = [
  {
    degree: "Software Engineering Certificate",
    institution: "Alx/Holberton School",
    date: "January, 2024",
    description:
      "Completed a Software Engineering Certificate through Alx Africa, focusing on software development principles, object-oriented programming, and full-stack development. The program included hands-on projects where I built scalable applications using Python, JavaScript, Node.js, and databases, along with topics such as data structures, algorithms, and testing methodologies.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "IAEC University, Togo",
    date: "July, 2023",
    description:
      "Completed a Bachelor's degree in Computer Science, gaining a strong foundation in software development, algorithms, data structures, and computer systems. Participated in various projects, including web application development, database management, and team-based software solutions. This academic experience provided both theoretical knowledge and practical skills in technology.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Kano State Polytechnic (School of Technology)",
    date: "April, 2019",
    description:
      "Earned a Diploma in Computer Engineering, covering essential hardware and software engineering concepts, including system design, network management, and programming. Gained practical skills in electronics, circuit design, and computer architecture, which laid the foundation for further studies and work in technology and engineering fields.",
  },
  {
    degree: "Remedial Studies",
    institution: "School of Basic and Remedial Studies",
    date: "August, 2017",
    description:
      "Completed remedial studies, laying the groundwork for advanced studies in technology and software engineering. Focused on strengthening foundational skills in mathematics, science, and computer literacy.",
  },
];

export { menuList, skills, portfolio, experience, education };
