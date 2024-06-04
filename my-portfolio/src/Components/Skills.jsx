import React from "react";
import { all_skills } from "./MySkills";
import Skill from "./Skill";

function Skills() {
  return (
    <div id="Skills" className="my-[140px] max-w-[1080px] mx-auto">
      <div className="sm:flex sm:flex-col sm:mx-[16px] md:mx-[24px] md:grid md:grid-cols-2">
        <div className="flex flex-col text-gray-400 break-words">
          <div className="sm:text-center md:text-left text-[14px] text-gray-400">
            My Skills
          </div>
          <h2 className="sm:text-center md:text-left text-[32px] font-bold text-white">
            What <span className="text-[#7eadfc]">I Can Do!</span>
          </h2>
          <p className="mt-[48px] sm:w-[360px] md:w-[460px] sm:text-[14px]">
            As a MERN stack developer, I have a wide range experience in front-end and back-end
            development. I am proficient in JavaScript, React, TypeScript,Node
            Js, HTML, and CSS. My strong experience in building responsive and
            dynamic user interfaces using React and Redux has allowed me to
            create engaging and interractive web applications.
          </p>
          <p className="mt-[24px] sm:w-[360px] md:w-[460px] sm:text-[14px]">
            I have experience in using React for building scalable and
            maintainable applications. This has allowed me to create efficient
            and sustainable code that can adapt to the changing needs of a
            business.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 sm:mt-[24px] md:grid-cols-3 gap-4">
          {all_skills.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
