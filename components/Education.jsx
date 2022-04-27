import React from "react";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const uni = [
  {
    name: (
      <>
        The University of <br /> Texas at Dallas
      </>
    ),
    degree: "Master of Science",
    major: "Electrical Engineering",
    graduation: "Dec 2013",
    logo: <Image src="/logos/utd.png" alt="utd" height="100%" width="100%" />,
  },
  {
    name: (
      <>
        SDM College of Engineering <br /> and Technology
      </>
    ),
    degree: "Bachelor of Engineering",
    major: "Electronics and Communications",
    graduation: "Aug 2010",
    logo: <Image src="/logos/sdm.png" alt="sdm" height="100%" width="100%" />,
  },
];

const Education = () => {
  return (
    <SectionContainer
      title="Education"
      className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20  mr-7 lg:mr-0"
    >
      {uni.map((u, i) => {
        return (
          <div
            key={i}
            className="space-y-3 lg:space-y-7 shadow-xl p-5 lg:px-10 lg:py-7 rounded-lg"
          >
            <div className="flex items-center space-x-5">
              <div className="w-10 h-[auto]">{u.logo}</div>
              <h4 className="text-base font-body lg:font-heading">{u.name}</h4>
            </div>
            <div className="flex flex-col">
              <p className="font-heading lg:font-body lg:text-2xl leading-7">
                {u.degree}
              </p>
              <p className="text-xs lg:text-base">{u.major}</p>
              <p className="text-xs lg:text-sm text-slate-500 mt-2">
                {u.graduation}
              </p>
            </div>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default Education;
