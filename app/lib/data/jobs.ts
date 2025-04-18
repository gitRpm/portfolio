export type Job = {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  imageUrl: string;
  link: string;
  skills: number[];
  current?: boolean;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    company: "DriveTime",
    startDate: new Date("2024-01-01"),
    endDate: null,
    description: "Developed customer-facing experiments to optimize conversion. Partnered with cross-functional teams to integrate third-party financing terms. Designed and managed CI/CD pipelines, ensuring reliable and automated deployments. Regularly conducted code reviews and provided mentorship to junior engineers, promoting code quality and adherence to best practices across teams.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://companya.com",
    skills: [3, 4, 12, 26, 10],
    current: true,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TEKSystems (Contract for Allianz)",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2024-01-01"),
    description: "Led front-end development for a policy lifecycle tracking application, improving page load performance by 45%. Modernized legacy systems by developing new features with React, resulting in an 85% reduction in reported application flow bugs. Provided strategic input on SDLC enhancements, boosting development throughput by 25%. Actively collaborated with backend teams to deliver seamless, high-performing user experiences in a fast-paced enterprise environment.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://companyb.com",
    skills: [12, 3, 5, 4, 9, 10],
    current: false,
  },
  {
    id: 3,
    title: "Sr. Software Engineer II",
    company: "Kaplan Professional",
    startDate: new Date("2018-01-01"),
    endDate: new Date("2022-09-01"),
    description:
      "Led major development initiatives across multiple product teams, focusing on scalable front-end architecture and high-traffic retail platforms. Spearheaded the redesign and deployment of a new Sitefinity CMS instance to support multiple storefronts with a shared cart system, aligning technical solutions with complex business requirements. Developed and maintained CI/CD pipelines, improving deployment reliability and velocity. Built interactive UIs with modern JavaScript frameworks to enhance user experience, and implemented a centralized GraphQL API to streamline data access across platforms. Played a key role in AWS-hosted deployments, leveraging services like CloudFront, S3, and ElastiCache to ensure performance and availability.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://companyc.com",
    skills: [12, 3, 5, 4, 9, 11, 27],
    current: false,
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "MarketSharp Software",
    startDate: new Date("2017-01-01"),
    endDate: new Date("2018-01-01"),
    description: "Developed and maintained key features for a SaaS-based CRM platform using ASP.NET, enhancing functionality based on business requirements. Designed and implemented a custom calendar solution integrated with Google and Apple calendars for real-time appointment tracking. Refactored legacy architecture by isolating domain logic into a NuGet package, improving code maintainability and modularity. Worked closely with cross-functional teams to align technical solutions with customer and product needs.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://companyd.com",
    skills: [12, 3, 4, 9],
    current: false,
  },
  {
    id: 5,
    title: "Software Engineer II",
    company: "Kaplan Professional",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2016-01-01"),
    description: "Developed and maintained core .NET microservices to support essential business operations, including product management, order processing, customer data, and finance workflows. Led the engineering effort during a major warehouse transition project, building scalable systems to support over 10,000 daily physical shipments. Designed and optimized SQL databases to support high-performance transactional processes. Contributed to service-oriented architecture initiatives and collaborated closely with cross-functional teams to deliver high-impact solutions aligned with evolving business needs.",
    imageUrl: "https://via.placeholder.com/150",
    link: "https://companye.com",
    skills: [12, 3, 27],
    current: false,
  },
];

export default jobs;
