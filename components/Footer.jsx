import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-5 bg-blue-900 py-20">
      <div />
      <div className="space-y-4">
        <Image src="/profilephoto.png" width="100" height="100" />
        <h1 className="text-white">Rohit Guttal</h1>
        <h3 className="text-blue-500">Physical Design | Hindustani Music</h3>
      </div>
      <div />
      <div className="text-white space-y-5">
        <p className="text-4xl font-heading">Site Map</p>
        <div className="flex flex-col space-y-2">
          <Link href="/">
            <a className="text-2xl">Home</a>
          </Link>
          <Link href="/music">
            <a className="text-2xl">Music</a>
          </Link>
          <Link href="/contact">
            <a className="text-2xl">Contact</a>
          </Link>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Footer;
