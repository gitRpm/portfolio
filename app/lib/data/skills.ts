export enum SkillType {
  Language = "Language",
  Framework = "Framework",
  Tool = "Tool",
  Practice = "Practice"
}

export type Skill = {
  id: number;
  title: string;
  type: SkillType;
  description: string;
  icon: string;
};

const skills = [
  {
    id: 1,
    title: "HTML",
    type: SkillType.Language,
    description: "HTML is a markup language used for structuring and presenting content on the web.",
    icon: "/html.svg",
  },
  {
    id: 2,
    title: "CSS",
    type: SkillType.Language,
    description: "CSS is a styling language used to describe the presentation of a document written in a markup language such as HTML.",
    icon: "/css.svg",
  },
  {
    id: 3,
    title: "JavaScript",
    type: SkillType.Language,
    description: "JavaScript is a programming language used to build interactive effects within web browsers.",
    icon: "/javascript.svg",
  },
  {
    id: 4,
    title: "TypeScript",
    type: SkillType.Language,
    description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    icon: "/typescript.svg",
  },
  {
    id: 5,
    title: "React",
    type: SkillType.Framework,
    description: "React is a JavaScript library for building user interfaces.",
    icon: "/react.svg",
  },
  {
    id: 6,
    title: "Next.js",
    type: SkillType.Framework,
    description: "Next.js is a React framework for building server-side rendered applications.",
    icon: "/nextjs.svg",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    type: SkillType.Tool,
    description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    icon: "/tailwind.svg",
  },
  {
    id: 8,
    title: "Git",
    type: SkillType.Tool,
    description: "Git is a distributed version control system for tracking changes in source code during software development.",
    icon: "/git.svg",
  },
  {
    id: 9,
    title: "Angular",
    type: SkillType.Framework,
    description: "Angular is a platform for building mobile and desktop web applications.",
    icon: "/angular.svg",
  },
  {
    id: 10,
    title: "Azure DevOps",
    type: SkillType.Tool,
    description: "Azure DevOps is a set of development tools for software development teams.",
    icon: "/azure.svg",
  },
  {
    id: 11,
    title: "GraphQL",
    type: SkillType.Framework,
    description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    icon: "/graphql.svg",
  },
  {
    id: 12,
    title: "C#/.NET",
    type: SkillType.Language,
    description: "C# is a modern, object-oriented programming language developed by Microsoft. .NET is a software framework developed by Microsoft that runs primarily on Microsoft Windows.",
    icon: "/csharp.svg",
  },
  {
    id: 13,
    title: "Agile Methodologies",
    type: SkillType.Practice,
    description: "Agile is a framework for managing software development projects.",
    icon: "/agile.svg",
  },
  {
    id: 16,
    title: "Unit & Integration Testing",
    type: SkillType.Practice,
    description: "Unit and integration testing are software testing techniques used to validate the functionality of individual components and their interactions.",
    icon: "/testing.svg",
  },
  {
    id: 17,
    title: "CI/CD",
    type: SkillType.Practice,
    description: "Continuous Integration and Continuous Deployment are practices that automate the integration and deployment of code changes.",
    icon: "/ci-cd.svg",
  },
  {
    id: 18,
    title: "Domain-Driven Design",
    type: SkillType.Practice,
    description: "Domain-Driven Design is an approach to software development that focuses on modeling the domain of the application.",
    icon: "/ddd.svg",
  },
  {
    id: 19,
    title: "Microservices",
    type: SkillType.Practice,
    description: "Microservices is an architectural style that structures an application as a collection of loosely coupled services.",
    icon: "/microservices.svg",
  },
  {
    id: 20,
    title: "RESTful APIs",
    type: SkillType.Practice,
    description: "RESTful APIs are web services that adhere to the principles of Representational State Transfer.",
    icon: "/rest.svg",
  },
  {
    id: 21,
    title: "Cross-functional Team Collaboration",
    type: SkillType.Practice,
    description: "Cross-functional team collaboration is a practice where team members from different functional areas work together to achieve a common goal.",
    icon: "/collaboration.svg",
  },
  {
    id: 22,
    title: "Project Planning & Execution",
    type: SkillType.Practice,
    description: "Project planning and execution is the process of planning and executing a project.",
    icon: "/planning.svg",
  },
  {
    id: 23,
    title: "Code Reviews",
    type: SkillType.Practice,
    description: "Code reviews are a practice where developers review each other's code to ensure quality and share knowledge.",
    icon: "/code-review.svg",
  },
  {
    id: 24,
    title: "SDLC Process Improvement",
    type: SkillType.Practice,
    description: "Software Development Life Cycle (SDLC) process improvement is the practice of improving the processes used in software development.",
    icon: "/sdlc.svg",
  },
  {
    id: 25,
    title: "Technical Documentation",
    type: SkillType.Practice,
    description: "Technical documentation is the practice of creating documentation for software applications.",
    icon: "/documentation.svg",
  },
  {
    id: 26,
    title: "Node.js",
    type: SkillType.Framework,
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: "/nodejs.svg",
  },
  {
    id: 27,
    title: "SQL",
    type: SkillType.Language,
    description: "SQL is a standard language for managing and manipulating databases.",
    icon: "/sql.svg",
  },
];

export default skills;
