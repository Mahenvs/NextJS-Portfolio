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
    
      <div className="flex ite ms-center mt-0 justify-center py-1 min-h-[80vh]">
        <div className="container mx-auto ">
          <Tabs className="flex flex-col xl:flex-row gap-12">
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
              <div>
                <h1>My Experience</h1>
                <div>This is my Experience Info</div>
              </div>
              {experience?.map((exp) => {
                return (
                  <Card
                    key={exp.company}
                    className="w-[400px]  flex flex-col justify-center items-center mb-3  gap-2 rounded-xl"
                  >
                    <span className=" text-skin-base">
                      {exp.startYear} - {exp.endYear}
                    </span>
                    <h3 className="text-xl max-w-[260px] min-h[60px] text-center">
                      {exp.position}
                    </h3>

                    <span className="">{exp.company}</span>
                  </Card>
                );
              })}
            </TabsContent>
            {/* </motion.div> */}

            <TabsContent value="Education">My Education details.</TabsContent>
            <TabsContent value="Skills">My Skills</TabsContent>
            <TabsContent value="About Me">About section</TabsContent>
          </Tabs>
        </div>
      </div>

    // <div className="container flex mx-auto gap-10">
    //   <section className="w-2/5">
    //     {list?.map((item) => {
    //       return <div key={item.name} className="flex p-2 bg-[#27272b] my-4 justify-center  rounded-xl">
    //         <span className="text-center cursor-pointer">{item.name}</span>
    //         </div>;
    //     })}
    //   </section>
    //   <div className="bg-white w-full">
    //     My Experience
    //   </div>
    // </div>
  );
};

export default page;
