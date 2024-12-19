import React from "react";
import { Card } from "@/components/ui/card";
import { workExperience } from "../data/work";
import { personalWork } from "../data/work";
import { GrDeploy } from "react-icons/gr";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center py-8 min-h-[80vh]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Personal Projects
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {personalWork.map((project) => (
            <Card
              key={project.companyName}
              className="p-6 rounded-xl shadow-lg "
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="flex  text-2xl gap-10 text-skin-base font-semibold">
                    {project.companyName}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="justify-end underline  text-white/90"
                    >
                      <GrDeploy />
                    </Link>
                  </h2>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {project.details.map((detail, index) => (
                  <li key={index} className="text-white/90 text-sm lg:text-lg">
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-white my-8">Work Experience</h1>
        <div className="grid grid-cols-1 gap-6">
          {workExperience.map((job) => (
            <Card key={job.companyName} className="p-6 rounded-xl shadow-lg ">
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className=" text-2xl text-skin-base font-semibold">
                    {job.companyName}
                  </h2>
                  <p className="font-semibold text-white/90 my-1 lg:text-xl">
                    {job.duties}
                  </p>
                </div>
                <div className="text-right">
                  <p className="hidden sm:block text-sm font-medium text-gray-100">
                    {job.location}
                  </p>
                  <p className="hidden sm:block text-sm text-gray-100">
                    {job.joinDate} - {job.leaveDate}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {job.details.map((detail, index) => (
                  <li key={index} className="text-white/90 text-sm lg:text-lg">
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
