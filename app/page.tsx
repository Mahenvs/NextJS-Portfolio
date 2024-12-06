"use client";
import Photo from "@/components/Photo";
import ResumePopup from "@/components/ResumeViewer";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <section className="h-screen">
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 ">
                {"Hello I'm"} <br />{" "}
                <span className="text-skin-base">Mahendra U</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                {`I'm a passionate Full Stack Developer with experience in building dynamic and responsive web applications.`}
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <ResumePopup />
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles={"flex gap-6"}
                    iconStyles={
                      // "border border-skin-base bg-primary text-primary hover:bg-skin-hover-fill hover:text-skin-secondary",
                      "w-9 h-9 border border-skin-base rounded-full flex justify-center items-center text-skin-base text-base hover:bg-skin-hover-fill hover:text-skin-secondary hover:transition-all duration-500"
                      // "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        <Stats />

        <Skills />
      </section>
    </>
  );
}
