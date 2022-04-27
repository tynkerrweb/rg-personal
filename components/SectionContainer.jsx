import React from "react";

//w-12 h-12 bg-blue-800 rounded-full lg:border-white lg:border-[16px] shadow-xl -ml-5 z-10 lg:z-30

const SectionContainer = ({ title, children, className }) => {
  return (
    <div className="flex space-x-5 lg:space-x-32">
      <div className="bg-white shadow-xl h-fit rounded-full ml-[45px] lg:-ml-[17px] mt-1 lg:mt-0 z-10 lg:z-30">
        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-800 rounded-full m-2 lg:m-3" />
      </div>
      <div className="w-full">
        <h2 className="mb-10">{title}</h2>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default SectionContainer;
