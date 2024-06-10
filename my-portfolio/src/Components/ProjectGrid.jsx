import React from "react";
import { grid_projects } from "./Data";
import { FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

function ProjectGrid() {
  return (
    <>
      <div className="mt-[40px]">
        <div className="sm:flex sm:flex-col sm:mx-[16px] md:grid grid-cols-3 mx-auto gap-6 scroll-smooth">
          {grid_projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#122841] py-4 px-3 rounded shadow-2xl"
              >
                <div className="border-2 border-gray-300 rounded flex flex-col">
                  <img src={project.image} alt={project.name} />
                  <div className="mt-[16px] mx-2">
                    <h3 className="text-[22px]">
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
                  </div>
                  <div className="my-[16px] px-2 flex gap-4">
                    <a
                      target="_blank"
                      className="text-[12px] text-[#07172a] md:hover:bg-[#d8d8d8] bg-white py-2 px-4 rounded"
                      href={project.href1}
                    >
                      Live Demo
                    </a>
                    <a
                      target="_blank"
                      className="text-[12px] text-white md:hover:outline-white outline outline-[#7eadfc] py-2 px-4 rounded"
                      href={project.href2}
                    >
                      Visit Github
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/projects">
          <div className="mt-10 flex items-end justify-end cursor-pointer">
            <button className="flex justify-center items-center gap-2  border-b border-white transition ease-in-out duration-300 hover:border-[#7eadfc] hover:text-[#7eadfc]">
              See more <GoArrowRight />
            </button>
          </div>{" "}
        </Link>
      </div>
    </>
  );
}

export default ProjectGrid;
