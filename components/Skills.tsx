"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { currentSkills } from "@/app/data/skills";

export default function Skills() {
  const slidesToShow = 10;
  const duplicatedSlides = [
    ...currentSkills,
    ...currentSkills,
    ...currentSkills,
  ];

  return (
    <div className="overflow-hidden relative mx-auto py-10 bg-muted">
      <section id="skills" className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Technical Skills
        </h2>

        <div className="w-full overflow-hidden relative">
          <div
            className="flex gap-4 animate-slide-loop"
            style={{
              width: `${duplicatedSlides.length * (100 / slidesToShow)}%`,
            }}
          >
            {duplicatedSlides.map((skill, index) => (
              <div key={index} className="flex-shrink-0 px-2">
                <Card className="border rounded-xl shadow-md bg-card">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="text-4xl mb-2">{skill.src}</div>
                    <h3 className="text-lg font-semibold text-center">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
