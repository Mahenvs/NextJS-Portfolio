import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";
const list = [
  {
    name: "Experience",
  },
  {
    name: "Education",
  },
  {
    name: "Skills",
  },
  {
    name: "About Me",
  },
];

const education = [
  {
    year: "2023 - 2024",
    degree: "Master's in Computer and Information Science",
    institution: "Southern Arkansas University, AR, USA",
  },
];

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
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    category: "Build and Deployment",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "Jenkins"],
  },
  {
    category: "Testing",
    items: ["Jest", "Mocha", "Cypress", "SonarQube"],
  },
  {
    category: "Development Tools",
    items: ["VSCode", "WebStorm", "Postman", "Git", "Webpack"],
  },
  {
    category: "Communication Tools",
    items: ["Slack", "Microsoft Teams", "Zoom", "Jira"],
  },
  {
    category: "Operating Systems",
    items: ["Windows", "Linux", "macOS"],
  },
];

const about = `
  I am a passionate software engineer with a knack for solving complex problems.
  With experience in frontend and backend development, I enjoy crafting
  seamless user experiences and optimizing performance. 
  In my free time, I love contributing to open-source projects and mentoring budding developers.
`;

const experience = [
  {
    startYear: "2021",
    endYear: "2023",
    company: "CITIUSTECH PRIVATE LIMITED",
    position: "Software Engineer",
  },
  {
    startYear: "2019",
    endYear: "2021",
    company: "WIPRO TECHNOLOGIES LIMITED",
    position: "Project Engineer",
  },
];

const page = () => {
  return (
    <div className="flex mt-0 justify-center py-1 min -h-[80vh]">
      <div className="container mx-auto ">
        <Tabs
          className="flex flex-col xl:flex-row gap-12"
          defaultValue="Experience"
        >
          <TabsList className="flex flex-col min-w-[380px] gap-6">
            {list?.map((item) => {
              return (
                <TabsTrigger key={item.name} value={item.name} className="">
                  {item.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            > */}
          <TabsContent value="Experience" className="w-full ">
            <div className="">
              <h1 className="text-2xl text-skin-base font-bold mb-4 place-content-start content-start ">
                My Experience
              </h1>
            </div>
            {experience?.map((exp) => {
              return (
                <Card
                  key={exp.company}
                  className="w-[400px] lg:w-[400px]  flex flex-col mb-3  gap-2 rounded-xl"
                >
                  <span className=" text-skin-base">
                    {exp.startYear} - {exp.endYear}
                  </span>
                  <h3 className="text-xl max-w-[260px] min-h[60px] text-start">
                    {exp.position}
                  </h3>

                  <span className="">{exp.company}</span>
                </Card>
              );
            })}
          </TabsContent>
          {/* </motion.div> */}

          <TabsContent value="Education" className="w-full">
            <div>
              <h1 className="text-2xl text-skin-base font-bold mb-4 place-content-start content-start ">
                My Education
              </h1>
            </div>
            {education.map((edu) => (
              <Card
                key={edu.institution}
                className="w-[400px] lg:w-[600px] flex flex-col mb-3 gap-2 rounded-xl"
              >
                <span className="text-skin-base">{edu.year}</span>
                <h3 className="text-xl max-w-[600px] text-start font-bold">
                  {edu.degree}
                </h3>
                <span>{edu.institution}</span>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="Skills" className="w-full">
            <div>
              <h1 className="text-2xl font-bold mb-4 text-skin-base">
                My Skills
              </h1>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">
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
              <h1 className="text-2xl text-skin-base font-bold mb-4 place-content-start content-start ">
                About Me
              </h1>
              <p className="mt-2">
                <Card className="w-[400px] text-justify lg:w-[800px] flex flex-col mb-3 gap-2 rounded-xl">
                  {about}
                </Card>
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
