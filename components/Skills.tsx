"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { currentSkills } from "@/app/data/skills";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4;
  const totalSlides = currentSkills.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + slidesToShow >= totalSlides ? 0 : prev + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - slidesToShow < 0 ? totalSlides - slidesToShow : prev - slidesToShow
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleSkills = currentSkills.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  // If we don't have enough items to fill the last slide, wrap around to the beginning
  if (visibleSkills.length < slidesToShow) {
    visibleSkills.push(
      ...currentSkills.slice(0, slidesToShow - visibleSkills.length)
    );
  }
  const duplicatedSlides = [...currentSkills, ...currentSkills];

  return (
    <div className="overflow-hidden relative mx-auto py-10 bg-muted">
      <section id="skills" className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Technical Skills
        </h2>

        <div className="w-full overflow-hidden">
          <div
            className=" container mx-auto flex animate-slide-loop"
            style={{
              width: `${duplicatedSlides.length * (100 / slidesToShow)}%`,
            }}
          >
            {duplicatedSlides.map((skill, index) => (
              <div
                key={index}
                className={` flex-shrink-0 px-2`} // 4 slides visible = 25% each
              >
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
