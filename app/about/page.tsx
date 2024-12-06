import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = [
  {
    category: "Programming Skills",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express JS",
      "Bootstrap",
      "Angular",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL", "Prisma ORM", "Redis"],
  },
  {
    category: "Build and Deployment",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "Jenkins"],
  },
  {
    category: "Testing",
    items: ["Jest", "Mocha", "Selenium", "Cypress", "SonarQube"],
  },
  {
    category: "Development Tools",
    items: ["VSCode", "WebStorm", "Postman", "Git", "Webpack"],
  },
  {
    category: "Communication Tools",
    items: ["Slack", "Microsoft Teams", "Zoom", "Trello", "Jira"],
  },
  {
    category: "Operating Systems",
    items: ["Windows", "Linux", "macOS"],
  },
];
const list = [
  { name: "Experience" },
  { name: "Education" },
  { name: "Skills" },
  { name: "About Me" },
];

const about = `
  I am a passionate software engineer with a knack for solving complex problems.
  With experience in frontend and backend development, I enjoy crafting
  seamless user experiences and optimizing performance. 
  In my free time, I love contributing to open-source projects and mentoring budding developers.
`;

const page = () => {
  return <>About Page</>;
};

export default page;
