import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { useRouter } from "next/router";

const NavMobile = () => {
  const [navClicked, setNavClicked] = useState(false);
  const router = useRouter();
  return (
    <div className="fixed flex items-center justify-between z-10 w-screen px-5 pt-5">
      <Link href="/" passHref>
        <div
          className={`flex items-center space-x-1 ${
            router.pathname === "/" ? "opacity-0" : ""
          }`}
        >
          <Image src="/profilephoto.png" width="40" height="40" />
          <h1 className="text-2xl font-semibold">Rohit Guttal</h1>
        </div>
      </Link>
      <div
        className="rounded h-fit z-10"
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
        className={`link text-white flex flex-col space-y-10 py-32 items-center bg-black opacity-90 fixed top-0 left-0 w-screen ${
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
          rel="noopener noreferrer"
        >
          <FiDownload className="w-5 h-5 text-white" />
          <p className="text-2xl font-heading text-white">Download Resume</p>
        </a>
      </div>
    </div>
  );
};

export default NavMobile;
