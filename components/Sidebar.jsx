import { useState } from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FacebookIcon, InstaIcon, LinkedinIcon, YoutubeIcon } from "../svg";
import useMediaQuery from "./hooks/useMediaQuery";

const contacts = [
  {
    name: "Email",
    value: "rmguttal@gmail.com",
    icon: <HiOutlineMail className="svgicon" />,
  },
  {
    name: "Website",
    value: "www.rmguttal.vercel.com",
    icon: <AiOutlineLink className="svgicon" />,
  },
  {
    name: "Phone",
    value: "(+1) 972 835 9012",
    icon: <BiPhoneCall className="svgicon" />,
  },
  {
    name: "Address",
    value: "Dallas, Texas, USA",
    icon: <GoLocation className="svgicon" />,
  },
];

const socials = [
  {
    name: "Facebook",
    value: "@rohit.guttal",
    icon: <FacebookIcon />,
  },
  {
    name: "LinkedIn",
    value: "rohitguttal",
    icon: <InstaIcon />,
  },

  {
    name: "Instagram",
    value: "@rohit.guttal",
    icon: <LinkedinIcon />,
  },
  {
    name: "YouTube",
    value: "rmguttal",
    icon: <YoutubeIcon />,
  },
];

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [isOpen, setIsOpen] = useState(false);

  function SidebarDesktop() {
    return (
      <div className="pt-10 pb-40 space-y-28">
        <div className="ml-16">
          <Image src="/profilephoto.png" width="194" height="194" />
          <h1>Rohit Guttal</h1>
          <h3>Physical Design | Hindustani Music</h3>
        </div>
        <div className="divider" />
        <div className="space-y-10 mx-16">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-7">
              <div className="p-4 bg-red-50 rounded-full">{contact.icon}</div>
              <div>
                <p className="text-stone-600">{contact.name}</p>
                <p className="text-xl text-slate-800 leading-5">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="space-y-10 mx-16">
          {socials.map((social, index) => (
            <div key={index} className="flex items-center space-x-7">
              {social.icon}
              <div>
                <p className="text-stone-600">{social.name}</p>
                <p className="text-xl text-slate-800 leading-5">
                  {social.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function SidebarMobile() {
    const ppSize = isOpen ? "194" : "50";
    return (
      <div className={`pt-12 pb-40 space-y-28 ${isOpen ? "px-10" : "px-5"}`}>
        <div className="">
          <Image src="/profilephoto.png" width={ppSize} height={ppSize} />
          {isOpen ? (
            <>
              <h1>Rohit Guttal</h1>
              <h3>Physical Design | Hindustani Music</h3>
            </>
          ) : null}
        </div>
        <div className="divider" />
        <div className="space-y-10">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-7">
              <div className="p-4 bg-red-50 rounded-full">{contact.icon}</div>
              {isOpen ? (
                <div>
                  <p className="text-stone-600">{contact.name}</p>
                  <p className="text-xl text-slate-800 leading-5">
                    {contact.value}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="space-y-10">
          {socials.map((social, index) => (
            <div key={index} className="flex items-center space-x-7">
              {social.icon}
              {isOpen ? (
                <div>
                  <p className="text-stone-600">{social.name}</p>
                  <p className="text-xl text-slate-800 leading-5">
                    {social.value}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const openSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`absolute lg:relative bg-blue-50 lg:z-20 top-0 ${
        isOpen ? "z-20" : ""
      }`}
      onClick={openSideBar}
    >
      {isDesktop ? <SidebarDesktop /> : <SidebarMobile />}
    </div>
  );
};

export default Sidebar;
