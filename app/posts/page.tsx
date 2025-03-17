import React from "react";
import { Card } from "@/components/ui/card";
import { workExperience } from "../data/work";
import { posts } from "../data/work";
import { GrDeploy } from "react-icons/gr";
import { IoReaderOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center py-8 min-h-[80vh]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Articles</h1>
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <Card key={post.title} className="p-6 rounded-xl shadow-lg ">
              <div className="flex justify-between mb-4">
                <div className="flex gap-6 align-middle items-center">
                  <h2 className="flex  text-2xl gap-10 text-skin-base font-semibold">
                    {post.title}
                  </h2>
                  <div className="gap-4 flex items-center  flex-row">
                    <h2 className="">
                      <Link
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-white/90 flex items-center"
                      >
                        <span className="flex items-center">
                          Live Demo <GrDeploy className="ml-1" />
                        </span>
                      </Link>
                    </h2>
                    <h2>
                      <Link
                        href={post.article}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="justify-end underline  text-white/90"
                      >
                        <span className="flex items-center">
                          Read here
                          <IoReaderOutline className="ml-1" />
                        </span>
                      </Link>
                    </h2>
                    <h2>
                      <Link
                        href={post.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" underline  text-white/90"
                      >
                        {" "}
                        <span className="flex items-center">
                          Github repo <FaGithub className="ml-1" />
                        </span>
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
