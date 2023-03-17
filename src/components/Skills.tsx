import React from "react";
import Link from "next/link";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

export default function Skills() {
  const icons = [
    {
      name: "HTML 5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: <FaHtml5 />,
      color: "text-orange-600 hover:bg-orange-200 ",
    },
    {
      name: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: <FaCss3Alt />,
      color: "text-blue-600 hover:bg-blue-200 ",
    },
    {
      name: "Javascript",
      href: "https://www.javascript.com/",
      icon: <SiJavascript />,
      color: "text-yellow-500 hover:bg-yellow-100",
    },
    {
      name: "Bootstrap",
      href: "https://getbootstrap.com/",
      icon: <FaBootstrap />,
      color: "text-purple-600 hover:bg-purple-200 ",
    },
    {
      name: "React",
      href: "https://reactjs.org/",
      icon: <FaReact />,
      color: "text-blue-800 hover:bg-blue-300 ",
    },
    {
      name: "TailwindCSS",
      href: "https://tailwindcss.com/",
      icon: <SiTailwindcss />,
      color: "text-teal-600 hover:bg-teal-200 ",
    },
    {
      name: "NextJS",
      href: "https://nextjs.org/",
      icon: <TbBrandNextjs />,
      color: "text-black hover:bg-gray-300 ",
    },
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      icon: <SiTypescript />,
      color: "text-sky-600 hover:bg-blue-300 ",
    },
    {
      name: "Swift",
      href: "https://swift.org/",
      icon: <FaSwift />,
      color: "text-orange-500 hover:bg-orange-300 ",
    },
    {
      name: "Chat Gpt",
      href: "https://openai.com/blog/chatgpt",
      icon: (
        <Image
          src="/chatGpt.png"
          alt="Logo"
          width={40}
          height={20}
          priority={true}
          style={{ width: "38px", height: "auto" }}
          className="transition duration-300 ease-in-out transform hover:scale-125"
        />
      ),
      color: "text-green hover:bg-green-300",
    },
  ];
  return (
    <div className="h-fit w-full pt-20 text-center" id="skills">
      <div className=" md:w-[500px] justify-center w-[350px] min-h-40 bg-gray-200 hover:bg-gray-100 duration-500 rounded-lg hover:rounded-3xl shadow-lg p-6 mx-auto">
        <h3 className="md:text-2xl text-xl font-medium">Skills</h3>
        <div className="flex p-2">
          <SkillIcons icons={icons} />
        </div>
      </div>
    </div>
  );
}

interface SkillProps {
  icons: {
    name: string;
    href: string;
    icon: any;
    color: string;
  }[];
}

const SkillIcons = ({ icons }: SkillProps) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {icons.map((icons) => (
        <Link
          href={icons.href}
          key={icons.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li
            className={`flex items-center flex-col justify-center h-20 md:w-20 w-16 rounded-xl text-3xl md:text-4xl duration-300 hover:text-5xl ${icons.color}`}
          >
            {icons.icon}
            <div className="text-sm text-black">{icons.name}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
