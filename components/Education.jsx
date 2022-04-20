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
    logo: <Image src="/logos/utd.png" alt="utd" height={50} width={50} />,
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
    logo: <Image src="/logos/sdm.png" alt="sdm" height={50} width={41} />,
  },
];

const Education = () => {
  return (
    <SectionContainer title="Education" className="flex space-x-20">
      {uni.map((u, i) => {
        return (
          <div key={i} className="space-y-7 shadow-xl px-10 py-7 rounded-lg">
            <div className="flex items-center space-x-5">
              {u.logo}
              <h4 className="text-base">{u.name}</h4>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl leading-7">{u.degree}</p>
              <p>{u.major}</p>
              <p className="text-sm text-slate-500 mt-2">{u.graduation}</p>
            </div>
          </div>
        );
      })}
    </SectionContainer>
  );
};

export default Education;
