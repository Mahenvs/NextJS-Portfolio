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
  return (
    <div className="flex items-center mt-0 justify-center py-1 min-h-[80vh]">
      <div className="container mx-auto">
        {/* Set "Experience" as the default active tab */}
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-12"
        >
          <TabsList className="flex flex-col min-w-[380px] gap-6">
            {list.map((item) => (
              <TabsTrigger key={item.name} value={item.name}>
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Experience" className="w-full">
            <div>
              <h1 className="text-2xl font-bold mb-4">My Experience</h1>
            </div>
            {experience.map((exp) => (
              <Card
                key={exp.company}
                className="w-[400px] flex flex-col justify-center items-center mb-3 gap-2 rounded-xl"
              >
                <span className="text-skin-base">
                  {exp.startYear} - {exp.endYear}
                </span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center font-bold">
                  {exp.position}
                </h3>
                <span>{exp.company}</span>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="Education" className="w-full">
            <div>
              <h1 className="text-2xl font-bold mb-4">My Education</h1>
            </div>
            {education.map((edu) => (
              <Card
                key={edu.institution}
                className="w-[400px] flex flex-col justify-center items-center mb-3 gap-2 rounded-xl"
              >
                <span className="text-skin-base">{edu.year}</span>
                <h3 className="text-xl max-w-[260px] text-center font-bold">
                  {edu.degree}
                </h3>
                <span>{edu.institution}</span>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="Skills" className="w-full">
            <div>
              <h1 className="text-2xl font-bold mb-4">My Skills</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skillCategory) => (
                <Card
                  key={skillCategory.category}
                  className="flex flex-col text-skin-base justify-center items-center p-6 gap-4 rounded-xl w-full"
                >
                  <h2 className="text-lg font-semibold text-center mb-2">
                    {skillCategory.category}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillCategory.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="About Me" className="w-full">
            <div>
              <h1 className="text-2xl text-skin-base font-bold">About Me</h1>
              <p className="mt-2">{about}</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
