import Link from "next/link";
import React from "react";
import { FaGripLines } from "react-icons/fa";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { NameProps } from "../Types";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const links = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="h-[70px] w-[90%] mt-4 rounded-xl fixed hover:rounded-3xl duration-500 bg-gradient-to-br from-gray-300 to-gray-200 shadow-xl font-medium z-50">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
          <Link href="/">
            <Image
              src="/svgs/amLogo.svg"
              alt="Logo"
              width={250}
              height={100}
              priority={true}
              
            />
          </Link>

          <LinkName links={links} />
          <button
            className="block md:hidden ml-auto px-4 transition-all"
            onClick={toggle}
          >
            {isOpen ? (
              <FaGripLines className="w-10 h-10 rotate-45 duration-500 -translate-y-28" />
            ) : (
              <FaGripLines className="w-10 h-10 rotate-[360deg] duration-700 hover:rotate-[180deg] hover:text-gray-600" />
            )}
          </button>
        </div>
      </nav>
      <MobileNav isOpen={isOpen} onClose={toggle} links={[]} />
    </>
  );
}

const LinkName = ({ links }: NameProps) => {
  return (
    <ul className="hidden space-x-8 text-xl md:flex rounded-md px-8 transition-all">
      {links.map((link) => (
        <li
          key={link.href}
          className="transform hover:scale-110 duration-500 action-underline hover:px-5 rounded-xl"
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
