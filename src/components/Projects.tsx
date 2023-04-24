import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { ProjectProps } from "./Types";

export default function Projects() {
  const projects = [
    {
      title: "Speedy Tune-Ups",
      description:
        "Speedy Tune-Ups is a Clone of The original Website, built with a focus on performance, accessibility, and responsive design.",
      builtWith: "Built with Next.js, Typescript, & TailwindCSS",
      src: "/images/speedy.png",
      code: "https://github.com/Mercad0/SpeedyTuneUps",
      live: "https://speedy-tune-ups.vercel.app/",
    },
    {
      title: "YNV Nails",
      description:
        "YNV Nails is a nail salon website where people can browse through manicure and pedicure products, as well as various designs.",
      builtWith: "Built with React, TypeScript, TailwindCSS and Firebase.",
      src: "/images/ynvnails.png",
      code: "https://github.com/JustMrMendez/ynvnails",
      live: "https://ynvnails.vercel.app/",
    },
    {
      title: "Photomatic",
      description:
        "Photomatic is a virtual store about different types of filters for photography.",
      builtWith: "Built with Next.js, TypeScript, & TailwindCSS",
      src: "/images/photomatic.png",
      code: "https://github.com/Mercad0/photomatic",
      live: "https://photomatic-three.vercel.app/",
    },
  ];

  return (
    <div
      className="h-fit w-fit m-4 py-20 text-center flex -mt-10 mx-auto"
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
    <ul className="gap-8 flex flex-wrap container">
      {projects.map(({ title, description, builtWith, src, code, live }) => (
        <li
          key={title}
          className="border border-black rounded-lg max-w-lg mx-auto overflow-hidden bg-gray-200 duration-500 hover:shadow-md hover:shadow-gray-800"
        >
          <div className="flex flex-col max-h-[500px] w-full mb-4">
            <div className="w-full h-fit flex-col">
              <a href={live} target="_blank" rel="noreferrer">
                <div className="image-container relative">
                  <Image
                    src={src}
                    alt={title}
                    width={600}
                    height={250}
                    priority={true}
                  />
                </div>
              </a>
              <h3 className="text-2xl font-bold mt-2">{title}</h3>
              <p className="my-4">{description}</p>
              <p className="text-base bg-gray-300 rounded-lg w-fit mx-auto px-2">
                {builtWith}
              </p>
            </div>
            <div className="flex space-x-6 justify-center text-2xl max-h-10 mt-4">
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source Code on Github"
                className="duration-500 hover:text-red-600 hover:scale-125"
              >
                <div className="flex items-start gap-1">
                  <FaCode />
                  <span className="text-xs pb-4">Code</span>
                </div>
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Website Preview"
                className="duration-500 hover:text-green-500 hover:scale-125"
              >
                <div className="flex items-start gap-2">
                  <RiLiveFill />
                  <div className="text-xs pb-4">Live Site</div>
                </div>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
