import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FacebookIcon, InstaIcon, LinkedinIcon, YoutubeIcon } from "../../svg";
export const contacts = [
  {
    name: "Email",
    value: "rmguttal@gmail.com",
    icon: <HiOutlineMail className="svgicon" />,
    link: "mailto:rmguttal@gmail.com",
  },
  {
    name: "Website",
    value: "www.rmguttal.vercel.com",
    icon: <AiOutlineLink className="svgicon" />,
    link: "https://www.rmguttal.vercel.com",
  },
  {
    name: "Phone",
    value: "(+1) 972 835 9012",
    icon: <BiPhoneCall className="svgicon" />,
    link: "tel:+1-972-835-9012",
  },
  {
    name: "Address",
    value: "Dallas, Texas, USA",
    icon: <GoLocation className="svgicon" />,
  },
];

export const socials = [
  {
    name: "Facebook",
    value: "@rohit.guttal",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/rohit.guttal",
  },
  {
    name: "LinkedIn",
    value: "rohitguttal",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/rohitguttal",
  },

  {
    name: "Instagram",
    value: "@rohit.guttal",
    icon: <InstaIcon />,
    link: "https://www.instagram.com/rohit.guttal",
  },
  {
    name: "YouTube",
    value: "rmguttal",
    icon: <YoutubeIcon />,
    link: "https://www.youtube.com/channel/UCajB8s5rz2BLS2kBQUCpgNQ",
  },
];
