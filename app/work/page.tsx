import React from "react";
import { Card } from "@/components/ui/card";
import { workExperience } from "../data/work";

const page = () => {
  return (
    <div className="flex items-center justify-center py-8 min-h-[80vh]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Work Experience</h1>
        <div className="grid grid-cols-1 gap-6">
          {workExperience.map((job) => (
            <Card key={job.companyName} className="p-6 rounded-xl shadow-lg ">
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className=" text-2xl text-skin-base font-semibold">
                    {job.companyName}
                  </h2>
                  <p className="font-semibold text-white/90">{job.duties}</p>
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
                  <li key={index} className="text-white/90 text-sm">
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
