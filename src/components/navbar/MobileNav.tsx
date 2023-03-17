import Link from "next/link";
import { GrClose } from "react-icons/gr";
import Image from "next/image";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;

  links: { title: string; href: string }[];
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const links = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 ease-in-out w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 z-50 transition-all ${
        isOpen ? "pointer-events-auto" : " pointer-events-none"
      }`}
      style={{
        transitionDuration: "0.9s",
        transform: isOpen ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="h-full container mx-auto px-4 md:px-8 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-20 right-4 text-gray-500 focus:outline-none transition-all duration-300 transform hover:text-gray-300 hover:rotate-180"
        >
          <GrClose className="w-10 h-10" />
        </button>
        <Image
          src="/amLogoWhite.svg"
          alt="Logo"
          width={600}
          height={100}
          priority={true}
          style={{ width: "600px", height: "auto" }}
        />
        <NavName links={links} onClose={onClose} isOpen />
      </div>
    </div>
  );
}

const NavName = ({ links, onClose }: MobileNavProps) => {
  return (
    <ul className="space-y-4 text-white text-center font-medium text-2xl">
      {links.map((link) => (
        <li key={link.href} className="cursor-pointer block" onClick={onClose}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
