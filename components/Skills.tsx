"use client";
import React, { useEffect, useRef } from "react";
import { FaAngular, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiDocker,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiShadcnui,
  SiTailwindcss,
  SiTwilio,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const currentSkills = [
  {
    id: "1",
    name: "Javascript",
    src: <IoLogoJavascript />,
  },
  {
    id: "2",
    name: "Typescript",
    src: <SiTypescript />,
  },
  {
    id: "3",
    name: "React",
    src: <FaReact />,
  },
  {
    id: "4",
    name: "Angular",
    src: <FaAngular />,
  },
  {
    id: "5",
    name: "NodeJS",
    src: <FaNodeJs />,
  },
  {
    id: "6",
    name: "Express",
    src: <SiExpress />,
  },
  {
    id: "7",
    name: "Python",
    src: <FaPython />,
  },
  {
    id: "8",
    name: "Twilio",
    src: <SiTwilio />,
  },
  {
    id: "9",
    name: "ShadCN",
    src: <SiShadcnui />,
  },
  {
    id: "10",
    name: "Tailwind",
    src: <SiTailwindcss />,
  },
  {
    id: "11",
    name: "NextJS",
    src: <RiNextjsFill />,
  },
  {
    id: "12",
    name: "MySQL",
    src: <SiMysql />,
  },
  {
    id: "13",
    name: "PostgreSQL",
    src: <SiPostgresql />,
  },
  {
    id: "14",
    name: "Docker",
    src: <SiDocker />,
  },
];
import { cn } from "@/lib/utils"; // ShadCN's `cn` utility for conditional classes

export default function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      // Duplicate content to create infinite scrolling effect
      container.innerHTML += container.innerHTML;
    }
  }, []);
  return (
    <div className="overflow-hidden relative">
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-10">
        <div className="container mx-auto">
          <div
            className="flex flex-wrap gap-6 max-w-[80vw] 
        xl:max-w-none mx-auto"
          >
            <h2 className="h2">
              <span className="text-skin-base">Skills</span>
            </h2>
            <section className="flex w-full relative">
              <div ref={scrollRef} className="flex animate-scroll gap-4">
                {currentSkills?.map((skill) => (
                  <div
                    key={`clone-${skill.id}`}
                    className="flex flex-col items-center border rounded-xl p-10 shadow-md "
                  >
                    <span className="text-lg font-xl">{skill.name}</span>
                    <span className="text-muted-foreground font-3xl text-6xl">
                      {skill.src}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
