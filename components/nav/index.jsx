import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiDownload } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";

const Nav = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [navClicked, setNavClicked] = useState(false);

  function NavDesktop() {
    return (
      <div className="fixed z-10 bg-white w-full flex justify-between items-center px-24 pt-10">
        <div
          className={`flex items-center space-x-5 ${
            router.pathname === "/" ? "opacity-0" : ""
          }`}
        >
          <Image src="/profilephoto.png" width="70" height="70" />
          <h1 className="text-3xl font-semibold tracking-normal">
            Rohit Guttal
          </h1>
        </div>
        <div className="flex items-center space-x-20">
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
          <Link href="/music" passHref>
            <a>Music</a>
          </Link>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
          <a
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg shadow-lg"
            href="https://drive.google.com/file/d/1C4ycxO8OM2GgEt8A4M4V6yw10OVBudos/view?usp=sharing"
            target="_blank"
          >
            <FiDownload className="w-5 h-5 text-white" />
            <p className="text-2xl font-heading text-white">Download Resume</p>
          </a>
        </div>
      </div>
    );
  }

  function NavMobile() {
    return (
      <div className="flex items-end justify-end z-10">
        <div
          className="p-5 rounded h-fit z-10"
          onClick={() => setNavClicked(!navClicked)}
        >
          {navClicked ? (
            <div className="flex items-center justify-center h-fit my-2">
              <div className="w-6 h-0.5 bg-slate-200 rotate-45" />
              <div className="w-6 h-0.5 bg-slate-200 -rotate-45 -ml-6" />
            </div>
          ) : (
            <div>
              <div className="w-6 h-0.5 mb-1.5 bg-black" />
              <div className="w-6 h-0.5 mb-1.5 bg-black" />
              <div className="w-6 h-0.5 bg-black" />
            </div>
          )}
        </div>

        <div
          className={`text-white flex flex-col space-y-10 py-32 px-3 items-center bg-black opacity-90 absolute top-0 left-0 w-full ${
            navClicked
              ? "translate-y-0 scale-y-100"
              : "-translate-y-full scale-y-0"
          } ease-in-out duration-300`}
        >
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
          <Link href="/music" passHref>
            <a>Music</a>
          </Link>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
          <a
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-lg shadow-lg"
            href="https://drive.google.com/file/d/1C4ycxO8OM2GgEt8A4M4V6yw10OVBudos/view?usp=sharing"
            target="_blank"
          >
            <FiDownload className="w-5 h-5 text-white" />
            <p className="text-2xl font-heading text-white">Download Resume</p>
          </a>
        </div>
      </div>
    );
  }

  return <>{isDesktop ? <NavDesktop /> : <NavMobile />}</>;
};

export default Nav;
