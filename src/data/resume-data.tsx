import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Harit Patel",
  initials: "HP",
  location: "Ahmedabad, India",
  locationLink: "",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Full Stack Engineer specializing in high-performance React applications,
      scalable Node.js services, and real-time collaboration systems.
      Experienced in technical web/mobile development and user centric design
      (UI/UX).
    </>
  ),
  avatarUrl:
    "https://lh3.googleusercontent.com/a/ACg8ocIFyvkXuIEcPrjy04cazaOjWyqi6WiUKsBGYWyj-LF8cmwZ0fYX=s360-c-no",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Harit007x",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harit-patel-a7a1a5208/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/harit_ptl",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Indus University",
      degree: "Bachelor's Degree in Computer Applicatons",
      start: "2017",
      end: "2020",
    },
    {
      school: "Indus University",
      degree: "Master's Degree in Computer Applicatons",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Excellent Webworld",
      link: "https://www.excellentwebworld.com/",
      badges: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js/Express.js",
        "Mongo DB",
        "Headless UI",
        "Figma",
      ],
      title: "Mern Stack Developer",
      start: "2025",
      end: "2025",
      description: (
        <>
          Building a production-ready promotional raffle platform inspired by
          Dream Dubai.{" "}
          <ul className="list-inside list-disc">
            <li>
              Enabling users to purchase digital shopping cards/products with
              automatic draw ticket generation.
            </li>
            <li>
              Developed user features including ticket history, campaign
              browsing, and participation in scheduled prize draws.
            </li>
            <li>
              Implemented a full admin CMS for campaign configuration,
              participant validation, draw execution, and winner publication.
            </li>
            <li>
              Designing and optimizing REST APIs with scalable,
              microservice-ready architecture.
            </li>
            <li>
              Creating a fully responsive React + Tailwind UI with smooth user
              flows and clean component structure.
            </li>
            <li>
              Implemented multi-campaign support, allowing simultaneous raffles
              with distinct rules and prize pools.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Ek Software",
      link: "http://www.eksoftware.in/",
      badges: [
        "Web Development",
        "React",
        "Next.js",
        "TypeScript",
        "Node js",
        "Postgresql",
        "Web-Sockets",
        "Python",
        "Rest Apis",
      ],
      title: "Fullstack Developer",
      start: "2022",
      end: "2022",
      description: (
        <>
          Led frontend redevelopment for a healthcare project (OPTML)
          <ul className="list-inside list-disc">
            <li>
              Revamped the frontend tech stack by migrating from React CRM to
              React Vite, replacing Material-UI with ShadCN UI + Tailwind, and
              adopting pnpm/Turborepo—improving development speed by 40%.
            </li>
            <li>
              Upgraded 90% of project libraries, increasing development server
              speed by 15%, while implementing JWT-based authentication and
              optimizing REST API performance.
            </li>
            <li>
              Improved team productivity and code quality by standardizing
              practices, leading code reviews (reducing bugs by 25%), — cutting
              onboarding time by 50%.
            </li>
            <li>
              Built a standalone WebSocket server for real-time updates and
              implemented pub/sub architecture for scalable future growth, while
              designing UX-focused interfaces that accelerated feature approval
              by 15%.
            </li>
            <li>
              Worked closely with product teams to translate UX/UI requirements
              into functional interfaces, ensuring timely and high-quality
              feature releases.
            </li>
            <li>
              Improved UI/UX, and achieved 100% responsiveness through migration
              from Bootstrap/SCSS to Tailwind CSS.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Node.js/Express.js",
    "Python",
    "Rest APIs",
    "GraphQL",
    "WebSockets",
    "WebRTC",
    "Postgresql",
    "MongoDb",
    "Tailwind CSS",
    "Design Systems",
    "Figma",
    "UI/UX",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
