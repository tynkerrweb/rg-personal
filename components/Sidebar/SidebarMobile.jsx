import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contacts, socials } from "./Json";

const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen(!isOpen);
  };
  const ppSize = isOpen ? "100" : "30";

  function MenuCollapsed() {
    return (
      <div
        className={`h-screen flex flex-col items-center justify-between bg-blue-50 top-0 px-2 pt-5 pb-20 border-r-2`}
        onClick={openSideBar}
      >
        <Link href="/" passHref>
          <div className="w-10 mb-8">
            <Image src="/profilephoto.png" width="100%" height="100%" />
          </div>
        </Link>
        <div className="divider" />
        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <a
              key={index}
              className="flex items-center space-x-7"
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 bg-red-50 rounded-full">{contact.icon}</div>
            </a>
          ))}
        </div>
        <div className="divider" />
        <div className="space-y-3">
          {socials.map((social, index) => (
            <a
              key={index}
              className="flex items-center space-x-7"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-7">{social.icon}</div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  function MenuOpen() {
    return (
      <div
        className={`h-screen flex flex-col justify-between bg-blue-50 top-0 px-10 py-5`}
        onClick={openSideBar}
      >
        <Link href="/" passHref>
          <div>
            <div className={`w-20`}>
              <Image src="/profilephoto.png" width="100%" height="100%" />
            </div>
            <div className={`whitespace-nowrap `}>
              <h1>Rohit Guttal</h1>
              <h3>Physical Design | Hindustani Music</h3>
            </div>
          </div>
        </Link>
        <div className="divider" />
        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <a
              key={index}
              className="flex items-center space-x-7"
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 bg-red-50 rounded-full">{contact.icon}</div>
              <div className={`whitespace-nowrap`}>
                <p className="text-sm text-stone-600">{contact.name}</p>
                <p className="text-slate-800 leading-5">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="divider" />
        <div className="space-y-2">
          {socials.map((social, index) => (
            <a
              key={index}
              className="flex items-center space-x-7"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-7">{social.icon}</div>
              <div>
                <p className="text-sm text-stone-600">{social.name}</p>
                <p className="text-slate-800 leading-5">{social.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        className={`fixed z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        } duration-300 ease-in-out`}
      >
        <MenuOpen />
      </div>
      <div
        className={`fixed z-10 ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        } duration-300 ease-in-out`}
      >
        <MenuCollapsed />
      </div>
    </>
  );
};

export default SidebarMobile;
