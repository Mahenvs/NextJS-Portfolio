<!-- // Resume  1-175 // Work 179-256

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const list = [
  { name: "Experience" },
  { name: "Education" },
  { name: "Skills" },
  { name: "About Me" },
];

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

const education = [
  {
    year: "2023 - 2024",
    degree: "Master of Science in Computer Science and Information Technology",
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
    items: ["React", "Next.js", "Node.js", "Express JS", "Bootstrap", "Angular"],
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
        <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-12">
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



// Work 
import React from "react";
import { Card } from "@/components/ui/card";

const workExperience = [
  {
    jobTitle: "Software Engineer",
    companyName: "CITIUSTECH PRIVATE LIMITED",
    location: "Mumbai, India",
    joinDate: "January 2021",
    leaveDate: "March 2023",
    details: [
      "Developed and maintained scalable web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
      "Optimized application performance, reducing load times by 30%.",
      "Led the migration of legacy systems to modern architectures.",
      "Implemented CI/CD pipelines to streamline deployments.",
    ],
  },
  {
    jobTitle: "Project Engineer",
    companyName: "WIPRO TECHNOLOGIES LIMITED",
    location: "Bangalore, India",
    joinDate: "July 2019",
    leaveDate: "December 2020",
    details: [
      "Designed and developed RESTful APIs using Spring Boot.",
      "Automated testing frameworks using Selenium and JUnit.",
      "Worked closely with clients to gather and refine requirements.",
      "Conducted code reviews to ensure code quality and adherence to standards.",
      "Mentored junior developers in the team.",
    ],
  },
];

const page = () => {
  return (
    <div className="flex items-center justify-center py-8 min-h-[80vh]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Work Experience</h1>
        <div className="grid grid-cols-1 gap-6">
          {workExperience.map((job) => (
            <Card
              key={job.companyName}
              className="p-6 rounded-xl shadow-lg bg-white"
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className=" text-2xl text-skin-base font-semibold">
                    {job.jobTitle}
                  </h2>
                  <p className="font-semibold text-gray-600">{job.companyName}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-500">
                    {job.location}
                  </p>
                  <p className="text-sm text-gray-500">
                    {job.joinDate} - {job.leaveDate}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {job.details.map((detail, index) => (
                  <li key={index} className="text-gray-700 text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
 -->
