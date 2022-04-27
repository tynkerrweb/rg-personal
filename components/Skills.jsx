import React from "react";
import SectionContainer from "./SectionContainer";
import { BiChip } from "react-icons/bi";
import { BsWrench, BsFillPeopleFill } from "react-icons/bs";
import { AiFillBuild } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const skills = [
  {
    catagory: "Physical Design",
    icon: <BiChip className="text-red-600 w-5 h-5" />,
    skillList: [
      "Floorplanning",
      "Power Planning",
      "MMMC Clock Design",
      "Timing Optimization",
      "ECO",
    ],
  },
  {
    catagory: "debugging & analysis",
    icon: <BsWrench className="text-red-600 w-5 h-5" />,
    skillList: [
      "Static Timing Analysis",
      "Timing Correlation",
      "Power/EM/IR Drop",
      "Logic Equivalence",
      "Routability",
      "Design Verification",
    ],
  },
  {
    catagory: "front-end design",
    icon: <AiFillBuild className="text-red-600 w-5 h-5" />,
    skillList: [
      "RTL Design",
      "Design Synthesis",
      "Design Optimization",
      "Constraint Developement",
      "Simulation",
    ],
  },
  {
    catagory: "automation & enhancement",
    icon: <BsCodeSlash className="text-red-600 w-5 h-5" />,
    skillList: [
      "Flow developement",
      "Tool Evaluation",
      "Process Evaluation",
      "Document developement",
      "Feasibility Analysis",
    ],
  },
  {
    catagory: "soft skills",
    icon: <BsFillPeopleFill className="text-red-600 w-5 h-5" />,
    skillList: [
      "Driving cross funtional development/debugging efforts",
      "Flow training and adoption",
      "Flow Ownership",
      "Managing multiple projects across different time zones and deadlines",
    ],
  },
];

const Skills = () => {
  return (
    <SectionContainer
      title="Skills"
      className="grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-y-14 mr-7 lg:mr-0"
    >
      {skills.map((item, index) => {
        return (
          <div key={index} className="space-y-1 lg:space-y-5">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-3 space-y-3 lg:space-y-0 bg-blue-50 lg:bg-blue-200 lg:w-80 justify-center p-3 lg:px-0 lg:py-1 rounded">
              {item.icon}
              <h6>{item.catagory}</h6>
            </div>
            <ul className="hidden lg:flex flex-col">
              {item.skillList.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default Skills;
//lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-y-14 flex flex-col space-y-5 lg:space-y-0 mr-7 lg:mr-0
