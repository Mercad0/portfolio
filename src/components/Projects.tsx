import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { ProjectProps } from "./Types";

export default function Projects() {
  const projects = [
    {
      title: "Testing Image one",
      description:
        "This row will serve for the testing of Line number 1, This row will serve for the testing of Line number 2.",
      src: "/images/cozy.png",
      code: "https://github.com/Mercad0/teacozy",
      live: "https://photomatic-three.vercel.app/",
    },
    {
      title: "Testing Image two",
      description:
        "This row will serve for the testing of Line number 1, This row will serve for the testing of Line number 2.",
      src: "/images/cozy.png",
      code: "https://github.com/Mercad0/teacozy",
      live: "https://teacozy-beige.vercel.app/",
    },
    {
      title: "Testing Image three",
      description:
        "This row will serve for the testing of Line number 1, This row will serve for the testing of Line number 2.",
      src: "/images/cozy.png",
      code: "https://github.com/Mercad0/teacozy",
      live: "https://teacozy-beige.vercel.app/",
    },
    {
      title: "Testing Image four",
      description:
        "This row will serve for the testing of Line number 1, This row will serve for the testing of Line number 2.",
      src: "/images/cozy.png",
      code: "https://github.com/Mercad0/teacozy",
      live: "https://teacozy-beige.vercel.app/",
    },
  ];

  return (
    <div
      className="h-fit w-fit m-4 py-20 text-center flex -mt-10"
      id="projects"
    >
      <div className=" md:w-full justify-center w-fit min-h-fit bg-gradient-to-br from-gray-400 to-gray-600 shadow-xl duration-500 rounded-lg hover:rounded-3xl p-6 mx-auto">
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
          className="border border-black rounded-lg max-w-sm mx-auto bg-gray-200 overflow-hidden"
        >
          <div className="flex flex-col max-h-[400px] mb-4">
            <div className="w-full md:h-[400px] h-fit relative flex-col">
              <Image
                src={project.src}
                alt="Logo"
                width={400}
                height={10}
                priority={true}
                className="hover:scale-105 transition duration-500 ease-in-out transform"
              />
              <h3 className="text-2xl font-bold mt-3">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
            </div>
            <div className="flex space-x-4 justify-center text-2xl max-h-10">
              <Link
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-3xl duration-500 text-red-600"
              >
                <FaCode />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-3xl duration-500 text-lime-500"
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
