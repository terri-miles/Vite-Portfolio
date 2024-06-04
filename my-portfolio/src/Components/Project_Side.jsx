import React from "react";
import { all_projects } from "./Data";
import { FaGithub } from "react-icons/fa";

function Project_Side() {
  return (
    <div className="mt-6 sm:mb10 md:mb-0 w-full sm:border-t-2 md:border-t-0 sm:py-10 md:py-0 md:border-l-2 border-white/20 md:overflow-auto scroll-smooth sm:h-[100%] md:h-[70vh]">
      <div className="sm:flex sm:flex-col sm:mx-[16px] md:mx-[16px] md:grid grid-cols-3 gap-6">
        {all_projects.map((project) => {
          return (
            <div
              className="rounded shadow-2xl transition ease-in-out duration-300 cursor-pointer md:hover:scale-[1.01]"
              key={project.id}
            >
              <div className="border-2 border-[#d9a8e3] p-2 rounded flex flex-col">
                <img
                  src={project.image}
                  alt={project.name}
                  className="border-2 border-white/40"
                />
                <div className="mt-[16px] mx-2">
                  <h3 className="text-[16px]">
                    {project.name}{" "}
                    <FaGithub className="inline text-[#7eadfc]" />
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-[8px]">
                    {project.stack.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#7eadfc] py-1 px-2 text-[10px] rounded"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <div className="my-[16px] flex gap-4">
                    <a
                      target="_blank"
                      className="text-[10px] text-[#07172a] md:hover:bg-[#d8d8d8] bg-white py-2 px-4 rounded"
                      href={project.href1}
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      className="text-[10px] text-white md:hover:outline-white outline outline-[#7eadfc] py-2 px-4 rounded"
                      href={project.href2}
                    >
                      Visit Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project_Side;
