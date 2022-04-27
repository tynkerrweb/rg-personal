import Link from "next/link";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { useRouter } from "next/router";

const NavDesktop = () => {
  const router = useRouter();

  return (
    <div className="fixed z-10 bg-white w-full flex justify-between items-center px-24 pt-10">
      <Link href="/" passHref>
        <div
          className={`flex items-center space-x-5 hover:cursor-pointer ${
            router.pathname === "/" ? "opacity-0" : ""
          }`}
        >
          <Image src="/profilephoto.png" width="70" height="70" />
          <h1 className="text-3xl font-semibold tracking-normal">
            Rohit Guttal
          </h1>
        </div>
      </Link>
      <div className="flex items-center space-x-20 link">
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

export default NavDesktop;
