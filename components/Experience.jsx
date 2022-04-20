import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

const exp = [
  {
    title: "SMTS Physical Design Engineer",
    company: "Maxim Integrated",
    from: "Feb 2014",
    to: "Present",
    logo: "/logos/maxim.png",
    location: "Dallas, Texas, USA",
  },
  {
    title: "RTL Design and Verification Engineer",
    company: "Xtendwave",
    from: "Sep 2012",
    to: "April 2013",
    logo: "/logos/xtendwave.png",
    location: "Dallas, Texas, USA",
  },
  {
    title: "Programmer Analyst",
    company: "MindTree",
    from: "Nov 2010",
    to: "May 2011",
    logo: "/logos/mindtree.png",
    location: "Bangalore, India",
  },
  {
    title: "Trainee",
    company: "Sankalp Semiconductor Pvt. Ltd.",
    from: "Nov 2009",
    to: "May 2010",
    logo: "/logos/sankalp.png",
    location: "Hubli, India",
  },
];

const Experience = () => {
  return (
    <SectionContainer
      title="Experience"
      className="flex  flex-col space-y-10 lg:mr-72"
    >
      {exp.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col lg:flex-row justify-between shadow-xl p-8 rounded ${
              index === 0 ? "border-b-2 border-blue-800 bg-blue-50" : ""
            }`}
          >
            <div className="flex items-center space-x-5">
              <Image
                src={item.logo}
                alt={item.company}
                height={50}
                width={50}
              />
              <div className="">
                <p className="text-slate-500">{item.title}</p>
                <h4 className="text-slate-800">{item.company}</h4>
              </div>
            </div>
            <div className="flex flex-col lg:items-end">
              <div className="text-slate-500 flex items-center">
                {item.from} -
                {index === 0 ? (
                  <div className="px-4 py-1 ml-2 bg-yellow-400 text-black rounded-lg text-lg">
                    Present
                  </div>
                ) : (
                  item.to
                )}
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="w-4 h-4" />
                <p className="text-sm text-slate-500">{item.location}</p>
              </div>
            </div>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default Experience;
