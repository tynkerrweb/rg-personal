import React from "react";
import SectionContainer from "../components/SectionContainer";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import useMediaQuery from "../components/hooks/useMediaQuery";

const Experience = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const imageSize = isDesktop ? "50" : "30";
  return (
    <SectionContainer
      title="Experience"
      className="flex flex-col space-y-10 lg:mr-72"
    >
      {exp.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col lg:flex-row justify-between shadow-xl p-2 lg:p-8 space-y-5 lg:space-y-0 rounded ${
              index === 0 ? "border-b-2 border-blue-800 bg-blue-50" : ""
            }`}
          >
            <div className="flex items-center space-x-2 lg:space-x-5">
              <Image
                src={item.logo}
                alt={item.company}
                height={imageSize}
                width={imageSize}
              />
              <div>
                {isDesktop ? (
                  <>
                    <p className="text-slate-500 text-xs">{item.title}</p>
                    <h4 className="text-slate-800 text-sm">{item.company}</h4>
                  </>
                ) : (
                  <h4 className="text-slate-500 text-sm">{item.company}</h4>
                )}
              </div>
            </div>
            {isDesktop ? null : (
              <p className="text-slate-800 text-lg">{item.title}</p>
            )}
            <div className="flex flex-col space-y-2 lg:space-y-0 lg:items-end">
              <div className="text-slate-500 flex items-center text-xs">
                {item.from} -
                {index === 0 ? (
                  <div className="px-2 lg:px-4 py-1 ml-2 bg-yellow-400 text-black rounded lg:rounded-lg text-xs lg:text-lg">
                    Present
                  </div>
                ) : (
                  item.to
                )}
              </div>
              <div className="flex items-center space-x-1 lg:space-x-2">
                <MdLocationOn className="w-3 h-3 lg:w-4 lg:h-4" />
                <p className="text-xs lg:text-sm text-slate-500">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default Experience;
