import Image from "next/image";
import { contacts, socials } from "./Json";

const SidebarDesktop = () => {
  return (
    <div className="pt-10 pb-40 space-y-28 bg-blue-50 z-20 border-r-2">
      <div className="ml-16">
        <Image src="/profilephoto.png" width="194" height="194" />
        <h1>Rohit Guttal</h1>
        <h3>Physical Design | Hindustani Music</h3>
      </div>
      <div className="divider" />
      <div className="space-y-10 mx-16">
        {contacts.map((contact, index) => (
          <a
            href={contact.link}
            key={index}
            className="flex items-center space-x-7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 bg-red-50 rounded-full">{contact.icon}</div>
            <div>
              <p className="text-stone-600">{contact.name}</p>
              <p className="text-xl text-slate-800 leading-5">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="divider" />
      <div className="space-y-10 mx-16">
        {socials.map((social, index) => (
          <a
            key={index}
            className="flex items-center space-x-7"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10">{social.icon}</div>
            <div>
              <p className="text-stone-600">{social.name}</p>
              <p className="text-xl text-slate-800 leading-5">{social.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarDesktop;
