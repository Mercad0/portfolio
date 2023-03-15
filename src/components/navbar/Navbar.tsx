import Link from "next/link";
import React from "react";
import { FaGripLines } from "react-icons/fa";
import MobileNav from "./MobileNav";

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
      <nav className="h-[70px] w-[90%] mt-4 rounded-3xl fixed bg-gradient-to-br from-gray-300 to-gray-100 shadow-xl font-medium ">
        <div className="container mx-auto px-4 md:px-6 flex items-center duration-500  hover:bg-gray-100 hover:rounded-3xl justify-between h-full">
          <div className="text-black text-2xl md:text-3xl action-underline">
            <Link href="/">Abimael Mercado</Link>
          </div>
          <LinkName links={links} />
          <button
            className="block md:hidden ml-auto px-4 transition-all"
            onClick={toggle}
          >
            {isOpen ? (
              <FaGripLines className="w-10 h-10 rotate-45 duration-500 -translate-y-28" />
            ) : (
              <FaGripLines className="w-10 h-10 rotate-[360deg] duration-700 hover:rotate-[180deg] hover:text-gray-100" />
            )}
          </button>
        </div>
      </nav>
      <MobileNav isOpen={isOpen} onClose={toggle} links={[]} />
    </>
  );
}
// props: links to avoid rewriting each class name individually
interface NameProps {
  links: { title: string; href: string }[];
}

const LinkName = ({ links }: NameProps) => {
  return (
    <ul className="hidden space-x-8 text-xl md:flex rounded-md px-8 transition-all">
      {links.map((link) => (
        <li
          key={link.href}
          className="transform hover:scale-110 hover:text-white duration-500 hover:bg-black hover:px-5 rounded-xl"
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
