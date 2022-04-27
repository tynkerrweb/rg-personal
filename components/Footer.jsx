import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center lg:grid lg:grid-cols-5 bg-blue-900 py-10 lg:py-20 ${
        router.pathname !== "/" ? "" : "pl-14"
      }`}
    >
      <div />
      <Link href="/" passHref>
        <div className="flex flex-col items-center lg:block lg:space-y-4 pb-10 lg:pb-0 hover:cursor-pointer">
          <Image src="/profilephoto.png" width="100" height="100" />
          <h1 className="text-white">Rohit Guttal</h1>
          <h3 className="text-blue-500">Physical Design | Hindustani Music</h3>
        </div>
      </Link>
      <div />
      <div className="text-white flex flex-col items-center lg:block space-y-3 lg:space-y-5">
        <p className="text-4xl font-heading">Site Map</p>
        <div className="flex flex-col items-center lg:items-start lg:space-y-2">
          <Link href="/">
            <a className="text-lg lg:text-2xl">Home</a>
          </Link>
          <Link href="/music">
            <a className="text-lg lg:text-2xl">Music</a>
          </Link>
          <Link href="/contact">
            <a className="text-lg lg:text-2xl">Contact</a>
          </Link>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Footer;
