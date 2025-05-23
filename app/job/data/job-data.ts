import { Job } from "../types/job-type";

export const jobs: Job[] = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    company: "DriveTime",
    startDate: new Date("2024-01-01"),
    endDate: null,
    description: "Developed customer-facing experiments to optimize conversion rates, collaborating with cross-functional teams to integrate third-party financing options. Designed and maintained CI/CD pipelines for reliable, automated deployments. Responsible for end-to-end software development lifecycle, including development, testing, deployment, and monitoring of all deliverables.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://drivetime.com",
    skills: [3, 4, 12, 26, 10, 9],
    current: true,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TEKSystems (Contract for Allianz)",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2024-01-01"),
    description: "Led front-end development for a policy tracking app, improving load performance by 45% and reducing flow bugs by 85% through React modernization. Advised on SDLC improvements, increasing throughput by 25%, and collaborated closely with backend teams to deliver high-performing user experiences.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://allianz.com",
    skills: [12, 3, 5, 4, 10],
    current: false,
  },
  {
    id: 3,
    title: "Sr. Software Engineer II",
    company: "Kaplan Professional",
    startDate: new Date("2018-01-01"),
    endDate: new Date("2022-09-01"),
    description: "Led scalable front-end architecture initiatives across high-traffic retail platforms. Redesigned and deployed a Sitefinity CMS to support multi-storefronts with a shared cart. Built CI/CD pipelines to boost deployment velocity, developed interactive UIs with modern JS frameworks, and implemented a centralized GraphQL API. Contributed to AWS deployments using CloudFront, S3, and ElastiCache to ensure performance and availability.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://kaplanprofessional.com",
    skills: [12, 3, 5, 4, 11, 27],
    current: false,
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "MarketSharp Software",
    startDate: new Date("2017-01-01"),
    endDate: new Date("2018-01-01"),
    description: "Built and maintained key features for a SaaS CRM using ASP.NET, including a custom calendar with Google and Apple integration. Refactored legacy code by modularizing domain logic into a NuGet package, boosting maintainability. Collaborated cross-functionally to align solutions with product and customer needs.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://marketsharp.com/",
    skills: [12, 3, 4, 9],
    current: false,
  },
  {
    id: 5,
    title: "Software Engineer II",
    company: "Kaplan Professional",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2016-01-01"),
    description: "Built and maintained core .NET microservices for product, order, customer, and finance workflows. Led engineering for a warehouse transition, scaling systems for 10K+ daily shipments. Designed high-performance SQL databases and contributed to service-oriented architecture, collaborating cross-functionally to meet business needs.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://kaplanprofessional.com",
    skills: [12, 3, 27],
    current: false,
  },
];

export default jobs;
