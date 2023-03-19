import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { ProjectProps } from "./Types";

export default function Projects() {
  const projects = [
    {
      title: "Hold",
      description: "Pending Project Description.",
      builtWith: "",
      src: "/svgs/amLogoDark.svg",
      code: "https://github.com/Mercad0/teacozy",
      live: "https://photomatic-three.vercel.app/",
    },
    {
      title: "Tea Cozy",
      description:
        "Tea cozy is a Virtual Store about Organic Teas & Different Flavors. ",
      builtWith: "Built with Next.js, Typescript, & TailwindCSS",
      src: "/images/cozy.png",
      code: "https://github.com/Mercad0/teacozy",
      live: "https://teacozy-beige.vercel.app/",
    },
    {
      title: "YNV Nails",
      description:
        "YNVnails is a project site about Nail Products, Nail styles & colors.",
      builtWith: "Built with React, Typescript, TailwindCss and Firebase.",
      src: "/images/ynvnails.png",
      code: "https://github.com/JustMrMendez/ynvnails",
      live: "https://ynvnails.vercel.app/",
    },
    {
      title: "Photomatic",
      description:
        "Photomatic is a virtual store about different types of filters for photography.",
      builtWith: "Built with Next.js, Typescript, & TailwindCss",
      src: "/images/photoMatic.png",
      code: "https://github.com/Mercad0/photomatic",
      live: "https://photomatic-three.vercel.app/",
    },
  ];

  return (
    <div
      className="h-fit w-fit m-4 py-20 text-center flex -mt-10"
      id="projects"
    >
      <div className=" md:w-full justify-center w-fit min-h-fit bg-gradient-to-br from-gray-300 to-gray-600 shadow-xl duration-500 rounded-lg hover:rounded-3xl p-6 mx-auto">
        <h3 className="md:text-3xl text-xl text-gray-200 font-medium">
          Projects
        </h3>
        <div className="flex flex-wrap mt-8">
          <Eachproject projects={projects} />
        </div>
      </div>
    </div>
  );
}

const Eachproject = ({ projects }: ProjectProps) => {
  return (
    <ul className="gap-8 flex flex-wrap">
      {projects.map((project) => (
        <li
          key={project.title}
          className="border border-black rounded-lg max-w-sm mx-auto bg-gray-200 overflow-hidden duration-500 hover:shadow-md hover:shadow-gray-800"
        >
          <div className="flex flex-col max-h-[500px] mb-4">
            <div className="w-full md:h-[370px] h-fit relative flex-col">
              <Image
                src={project.src}
                alt="Logo"
                width={400}
                height={10}
                priority={true}
                className="hover:scale-105 transition duration-500 ease-in-out transform image"
              />
              <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
              <p className="mb-1">{project.description}</p>
              <p className="text-base bg-gray-300 rounded-lg w-fit mx-auto px-2">
                {project.builtWith}
              </p>
            </div>
            <div className="flex space-x-4 justify-center text-2xl max-h-10">
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-500 text-red-600 hover:scale-125"
              >
                <FaCode />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-500 text-green-500 hover:scale-125"
              >
                <RiLiveFill />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
