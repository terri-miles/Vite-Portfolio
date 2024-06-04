import React from "react";
import my_img from "../assets/About-me.JPG";
import { Link } from "react-router-dom";
import Project_Side from "./Project_Side";

function MyProjects() {
  return (
    <div className="bg">
      <div className="bg-transparent items-center py-6 sm:mx-[32px] md:mx-[64px] border-b-2 border-white relative">
        <div className="basis-1/2 absolute sm:left-0 sm:top-[35%] md:left-0 md:top-[45%]">
          <Link to="/">
            <div className="text-[20px] font-bold">
              Oteri.<span className="text-[#7eadfc]">Dev</span>
            </div>
          </Link>
        </div>
        <div className="sm:text-right md:text-center items-center text-[32px] font-bold">
          <span className="text-[#7eadfc]">#</span>PROJECTS
        </div>
      </div>
      <div className="sm:mx-[32px] md:mx-[64px] md:flex pt-4">
        <div className="basis-[25%]">
          <div className="">
            <div className="mt-6">
              <img
                src={my_img}
                alt=""
                className="w-[70%] rounded-md sm:mx-auto md:mx-0"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[14px] ">
                <span className="text-[#7eadfc] font-thin">NAME:</span>{" "}
                <span className="text-gray-200 font-semibold">
                  Prince Oghenero, Oteri
                </span>
              </h3>
              <h3 className="text-[14px]">
                <span className="text-[#7eadfc] font-thin">Skill:</span>{" "}
                <span className="text-gray-200 font-semibold">
                  Html, CSS, Javascript, Bootstrap, Tailwind, Raect, Typescript,
                  Node and Express Js
                </span>
              </h3>
              <h3 className="text-[14px]">
                <span className="text-[#7eadfc] font-thin">Experience:</span>{" "}
                <span className="text-gray-200 font-semibold">
                  Proffessional
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="basis-[75%]">
          <Project_Side />
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
