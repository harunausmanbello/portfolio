const menuList = [
  { slug: "home", label: "Home" },
  { slug: "about", label: "About" },
  { slug: "skills", label: "Skills" },
  { slug: "portfolio", label: "Portfolio" },
  { slug: "resume", label: "Resume" },
  { slug: "contact", label: "Contact" },
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
        name: "School Management System",
        technologiesUsed: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
        websiteLink: "https://portal.iaec-university.tg/",
        gibhubLink: "#",
        image: "/portfolio/sms.png",
      },
      {
        name: "Certificate Verification System",
        technologiesUsed: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
        websiteLink: "http://cvp.a0001.net",
        gibhubLink:
          "https://github.com/harunausmanbello/certificate-verification-portal.git",
        image: "/portfolio/cvp.png",
      },
      {
        name: "Ajibade & Ajibade Law Firm",
        technologiesUsed: ["Next.js", "Tailwind"],
        websiteLink: "https://ajibade-and-ajibade.vercel.app/",
        gibhubLink: "#",
        image: "/portfolio/ajibade.png",
      },
      {
        name: "Security Alert System",
        technologiesUsed: [
          "Next.js",
          "MySQL",
          "Prisma",
          "Next-auth",
          "Tailwind",
        ],
        websiteLink: "https://security-alert.vercel.app/",
        gibhubLink:
          "https://github.com/harunausmanbello/security-alert-system.git",
        image: "/portfolio/sas.png",
      },
      {
        name: "Taskhub API",
        technologiesUsed: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
        websiteLink: "https://taskhub-api.up.railway.app/",
        gibhubLink: "https://github.com/harunausmanbello/taskhub_API.git",
        image: "/portfolio/taskhub.png",
      },
    ],
  },
];

const experience = [
  {
    duration: "2023–2024",
    company: "UREBA CAFÉ TECHNOLOGIES, Abuja, Nigeria",
    role: "Project Officer (Consultant)",
    technologies: [],
    description:
      "As a Project Officer at UREBA CAFÉ TECHNOLOGIES, I designed and implemented digital systems for large-scale cash transfer programs, automating payment workflows, data validation, and reporting for over 90,000+ beneficiaries across Kano and Borno States. My key achievements include the development and deployment of a payment system that enabled 100% automated disbursements, improving data accuracy by 90% and reducing processing time by 70%. I also enhanced a digital data validation tool, increasing operational efficiency by 85%, and validated data for 42,000 beneficiaries with 95% completeness. Additionally, I compiled the Borno State CCT Agile Beneficiary Register with 98% data accuracy.",
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
