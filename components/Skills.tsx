"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { currentSkills } from "@/app/data/skills";

export default function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.innerHTML += container.innerHTML;
    }
  }, []);

  return (
    <div className="overflow-hidden relative mx-auto">
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <section className="py-8 px-2 sm:px-4 bg-muted w-full" id="skills">
              <div className="w-full sm:max-w-4xl lg:max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
                  <span className="text-skin-base">Technical Skills</span>
                </h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className=" max-w-[20rem] ml-4 sm:w-full"
                >
                  <CarouselContent className="flex gap-4">
                    {currentSkills.map((skill) => (
                      <CarouselItem
                        key={skill.id}
                        className="basis-[40%] sm:basis-[45%] md:basis-[30%] lg:basis-[20%] flex-shrink-0 transition-transform duration-300"
                      >
                        <Card className="px-2 sm:px-2 sm:py-6 border rounded-xl shadow-md bg-card my-2 sm:my-4">
                          <CardContent className="flex flex-col items-center justify-center px-1 sm:px-4">
                            <div className="text-3xl sm:text-4xl">
                              {skill.src}
                            </div>
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground text-center mt-2">
                              {skill.name}
                            </h3>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
