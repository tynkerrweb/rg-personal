import React from "react";
import SectionContainer from "./SectionContainer";
import { BiChip } from "react-icons/bi";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineSearch, AiFillFire } from "react-icons/ai";
import { MdOutlineTransform, MdMiscellaneousServices } from "react-icons/md";

const tools = [
  {
    catagory: "Physical Design",
    toolList: ["Innovus", "Encounter", "IC Compiler"],
    icon: <BiChip className="text-blue-600 w-5 h-5" />,
  },
  {
    catagory: "STA",
    toolList: ["Quantus", "Tempus", "PrimeTime"],
    icon: <BsSpeedometer className="text-blue-600 w-5 h-5" />,
  },
  {
    catagory: "PDV",
    toolList: ["Assura (DRC, LVS)", "Caliber (DRC, LVS)"],
    icon: <AiOutlineSearch className="text-blue-600 w-5 h-5" />,
  },
  {
    catagory: "power",
    toolList: ["Voltus"],
    icon: <AiFillFire className="text-blue-600 w-5 h-5" />,
  },
  {
    catagory: "synthesis",
    toolList: ["Design Compiler", "RTL Compiler"],
    icon: <MdOutlineTransform className="text-blue-600 w-5 h-5" />,
  },
  {
    catagory: "misc.",
    toolList: ["ModelSim", "Matlab", "Hspice", "VS Code"],
    icon: <MdMiscellaneousServices className="text-blue-600 w-5 h-5" />,
  },
];

const Tools = () => {
  return (
    <SectionContainer
      title="Tools"
      className="w-fit grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 lg:gap-x-28 lg:gap-y-14 mr-7 lg:mr-0"
    >
      {tools.map((item, index) => {
        return (
          <div key={index} className="flex flex-col space-y-3">
            <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-3 bg-amber-100 lg:bg-amber-200 lg:w-60 justify-center p-3 lg:px-0 lg:py-1 rounded">
              {item.icon}
              <h6>{item.catagory}</h6>
            </div>
            <ul className="hidden lg:flex flex-col">
              {item.toolList.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default Tools;
