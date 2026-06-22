export enum ToolCategory {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  DATABASE = "DATABASE",
  DEVOPS = "DEVOPS",
  TESTING = "TESTING",
  VERSION_CONTROL = "VERSION_CONTROL",
  LANGUAGE = "LANGUAGE",
  UI_TOOLKIT = "UI_TOOLKIT",
  API = "API",
  MOBILE = "MOBILE",
  CLOUD = "CLOUD",
  MONITORING = "MONITORING",
  SECURITY = "SECURITY",
  CACHING_LAYER = "CACHING_LAYER",
  ORM = "ORM",
  TASK_SCHEDULING = "TASK_SCHEDULING",
  BACKEND_AUTOMATION = "BACKEND_AUTOMATION",
}

export enum AboutMeCategory {
  PERSONAL_BACKGROUND = "PERSONAL_BACKGROUND",
  TECHNICAL_EXPERTISE = "TECHNICAL_EXPERTISE",
  WORK_PHILOSOPHY = "WORK_PHILOSOPHY",
  CAREER_HIGHLIGHTS = "CAREER_HIGHLIGHTS",
  CONTINUOUS_LEARNING = "CONTINUOUS_LEARNING",
  WORK_EXPERIENCE = "WORK_EXPERIENCE",
  EDUCATIONAL_BACKGROUND = "EDUCATIONAL_BACKGROUND",
}

export enum ProjectType {
  MOBILE_APPLICATION = "MOBILE_APPLICATION",
  DESKTOP_APPLICATION = "DESKTOP_APPLICATION",
  WEB_APPLICATION = "WEB_APPLICATION",
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  description: string | null;
  address: string | null;
  phoneNumber: string | null;
  linkedinLink: string | null;
  githubLink: string | null;
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Tool {
  id: string;
  name: string;
  picture: string | null;
  category: ToolCategory;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Framework {
  id: string;
  name: string;
  image: string | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  githubLink: string | null;
  previewLink: string | null;
  type: ProjectType;
  roles: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  frameworkId: string;
  aboutMeId: string | null;
}

export interface Certification {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  dateIssued: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AboutMe {
  id: string;
  category: AboutMeCategory;
  title: string;
  description: string | null;
  startDate: Date | null;
  endDate: Date | null;
  isPresent: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export const mockUser: User = {
  id: "usr_1",
  name: "Alex Chen",
  email: "alex.chen@example.com",
  emailVerified: true,
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
  description:
    "Senior Full-Stack Engineer specializing in distributed systems and polished user interfaces. I build scalable applications with a focus on performance, accessibility, and exceptional developer experience. Currently exploring the intersection of AI and frontend tooling.",
  address: "San Francisco, CA",
  phoneNumber: "+1 (555) 123-4567",
  linkedinLink: "https://linkedin.com/in/example",
  githubLink: "https://github.com/example",
  photos: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  ],
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2024-01-01"),
};

export const mockFrameworks: Framework[] = [
  {
    id: "fw_1",
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "fw_2",
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "fw_3",
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockTools: Tool[] = [
  {
    id: "tl_1",
    name: "TypeScript",
    picture: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: ToolCategory.LANGUAGE,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "tl_2",
    name: "PostgreSQL",
    picture: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: ToolCategory.DATABASE,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "tl_3",
    name: "Tailwind CSS",
    picture: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: ToolCategory.UI_TOOLKIT,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "tl_4",
    name: "Docker",
    picture: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: ToolCategory.DEVOPS,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "tl_5",
    name: "Prisma",
    picture: null,
    category: ToolCategory.ORM,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "tl_6",
    name: "AWS",
    picture: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: ToolCategory.CLOUD,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockProjects: Project[] = [
  {
    id: "prj_1",
    name: "Nexus Analytics",
    description:
      "A real-time analytics dashboard for e-commerce platforms processing millions of events daily. Built with a high-performance streaming architecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com",
    previewLink: "https://example.com",
    type: ProjectType.WEB_APPLICATION,
    roles: ["Lead Engineer", "UI/UX Design"],
    createdBy: "usr_1",
    createdAt: new Date("2023-06-01"),
    updatedAt: new Date("2024-01-01"),
    frameworkId: "fw_2",
    aboutMeId: null,
  },
  {
    id: "prj_2",
    name: "Orbit Mobile",
    description:
      "Cross-platform mobile application for personal finance management with offline-first capabilities and end-to-end encryption.",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com",
    previewLink: null,
    type: ProjectType.MOBILE_APPLICATION,
    roles: ["Mobile Developer"],
    createdBy: "usr_1",
    createdAt: new Date("2022-11-01"),
    updatedAt: new Date("2023-05-01"),
    frameworkId: "fw_1",
    aboutMeId: null,
  },
  {
    id: "prj_3",
    name: "Aura UI",
    description:
      "An open-source component library focused on accessibility and motion. Used by over 500+ developers in production.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com",
    previewLink: "https://example.com",
    type: ProjectType.WEB_APPLICATION,
    roles: ["Creator", "Maintainer"],
    createdBy: "usr_1",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2024-02-01"),
    frameworkId: "fw_1",
    aboutMeId: null,
  },
];

export const mockCertifications: Certification[] = [
  {
    id: "cert_1",
    name: "AWS Certified Solutions Architect",
    description:
      "Professional level certification validating advanced technical skills and experience in designing distributed applications and systems on the AWS platform.",
    image: null,
    dateIssued: new Date("2023-08-15"),
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cert_2",
    name: "Meta Front-End Developer Professional",
    description:
      "Comprehensive certification covering React, UI/UX principles, and advanced state management.",
    image: null,
    dateIssued: new Date("2022-12-10"),
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockAboutMe: AboutMe[] = [
  {
    id: "abt_1",
    category: AboutMeCategory.WORK_EXPERIENCE,
    title: "Senior Software Engineer @ TechNova",
    description:
      "Leading the core platform team. Architected a micro-frontend migration that reduced load times by 40%. Mentored 5 junior engineers.",
    startDate: new Date("2021-03-01"),
    endDate: null,
    isPresent: true,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "abt_personal",
    category: AboutMeCategory.PERSONAL_BACKGROUND,
    title: "My Journey",
    description:
      "I started coding when I was 14, building custom themes for forums. What began as a hobby quickly turned into a lifelong passion for creating things that live on the internet. Outside of work, I am an avid rock climber and specialty coffee enthusiast.",
    startDate: null,
    endDate: null,
    isPresent: false,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "abt_philosophy",
    category: AboutMeCategory.WORK_PHILOSOPHY,
    title: "Design Philosophy",
    description:
      "I believe that the best code is the code you don't have to write. I prioritize simplicity, maintainability, and user experience above all else. A great product is not just functional; it feels inevitable and intuitive to the user.",
    startDate: null,
    endDate: null,
    isPresent: false,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "abt_expertise",
    category: AboutMeCategory.TECHNICAL_EXPERTISE,
    title: "Core Focus",
    description:
      "My expertise lies in bridging the gap between complex backend systems and polished frontend interfaces. I specialize in React ecosystem, distributed Node.js architectures, and building accessible, motion-rich UI components.",
    startDate: null,
    endDate: null,
    isPresent: false,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "abt_2",
    category: AboutMeCategory.WORK_EXPERIENCE,
    title: "Full Stack Developer @ StartupX",
    description:
      "Built the MVP from scratch using React and Node.js. Scaled the application to 10,000 monthly active users within the first year.",
    startDate: new Date("2019-06-01"),
    endDate: new Date("2021-02-28"),
    isPresent: false,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "abt_3",
    category: AboutMeCategory.EDUCATIONAL_BACKGROUND,
    title: "B.S. Computer Science @ State University",
    description:
      "Graduated with Honors. Specialized in distributed systems and human-computer interaction.",
    startDate: new Date("2015-09-01"),
    endDate: new Date("2019-05-30"),
    isPresent: false,
    createdBy: "usr_1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
