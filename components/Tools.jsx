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
      className="grid grid-rows-2 grid-cols-3 gap-y-14"
    >
      {tools.map((item, index) => {
        return (
          <div key={index} className="flex flex-col space-y-5">
            <div className="flex items-center space-x-3 bg-amber-200 w-60 justify-center py-1 rounded">
              {item.icon}
              <h6>{item.catagory}</h6>
            </div>
            <ul className="flex flex-col">
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
