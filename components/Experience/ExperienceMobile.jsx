import React from "react";
import SectionContainer from "../SectionContainer";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { exp } from "./Json";

const ExperienceMobile = () => {
  return (
    <SectionContainer
      title="Experience"
      className="flex flex-col space-y-10 mr-7 lg:mr-0"
    >
      {exp.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col justify-between shadow-xl p-5 space-y-5 rounded ${
              index === 0 ? "border-b-2 border-blue-800 bg-blue-50" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <Image
                src={item.logo}
                alt={item.company}
                height={35}
                width={35}
              />
              <div className="space-y-1">
                <h4 className="text-slate-800 text-base font-body">
                  {item.company}
                </h4>
                <div>
                  <div className="flex items-center">
                    <MdLocationOn className="w-3 h-3 text-slate-500" />
                    <p className="text-xs text-slate-500">{item.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-slate-800 text-base font-heading">
                {item.title}
              </p>
              <div className="text-slate-500 flex items-center text-xs whitespace-nowrap">
                {item.from} -
                {index === 0 ? (
                  <div className="px-2 py-px ml-2 bg-yellow-400 text-black rounded text-xs">
                    Present
                  </div>
                ) : (
                  item.to
                )}
              </div>
            </div>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default ExperienceMobile;
