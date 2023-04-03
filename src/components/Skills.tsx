import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SkillProps } from "./Types";

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
      color: "text-yellow-500 hover:bg-yellow-200",
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
      color: "text-teal-600 hover:bg-teal-200",
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
      name: "Firebase",
      href: "https://firebase.google.com/",
      icon: <SiFirebase />,
      color: "text-yellow-500 hover:bg-yellow-200",
    },
  ];
  return (
    <div className="mx-auto text-center md:pt-20 pt-10" id="skills">
      <div className=" md:w-[600px] w-fit bg-gray-500 duration-500 rounded-lg hover:rounded-3xl shadow-xl p-6">
        <h3 className="md:text-2xl text-xl font-medium text-white">Skills</h3>
        <div className="flex p-1">
          <SkillIcon icons={icons} />
        </div>
      </div>
    </div>
  );
}

const SkillIcon = ({ icons }: SkillProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {icons.map(({ href, name, icon, color }) => (
        <a href={href} key={href} target="_blank" rel="noopener noreferrer">
          <div
            className={`flex items-center flex-col justify-center py-1 h-20 md:w-24 w-16 rounded-xl text-4xl duration-300 hover:text-5xl ${color}`}
          >
            {icon}
            <div className="md:text-base text-sm text-white">{name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};
