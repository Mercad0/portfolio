import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      title: "First Site",
      description: "some texts will go here, display texts on the screen for visuals.",
      photo: (
        <Image
          src="/amLogoDark.svg"
          alt="Logo"
          width={400}
          height={100}
          priority={true}
          style={{ width: "400px", height: "200px" }}
        />
      ),
      code: "https://github.com/Mercad0/photomatic",
      live: "https://photomatic-three.vercel.app/",
    },
    {
      title: "Second Site",
      description: "some texts will go here, display texts on the screen for visuals.",
      photo:  <Image
      src="/amLogoDark.svg"
      alt="Logo"
      width={400}
      height={100}
      priority={true}
      style={{ width: "400px", height: "200px" }}
    />,
      code: "https://github.com/Mercad0/photomatic",
      live: "https://photomatic-three.vercel.app/",
    },
    {
        title: "third Site",
        description: "some texts will go here, display texts on the screen for visuals.",
        photo:  <Image
        src="/amLogoDark.svg"
        alt="Logo"
        width={400}
        height={100}
        priority={true}
        style={{ width: "400px", height: "200px" }}
      />,
        code: "https://github.com/Mercad0/photomatic",
        live: "https://photomatic-three.vercel.app/",
      },
      {
        title: "fourth Site",
        description: "some texts will go here, display texts on the screen for visuals.",
        photo:  <Image
        src="/amLogoDark.svg"
        alt="Logo"
        width={400}
        height={100}
        priority={true}
        style={{ width: "400px", height: "200px" }}
      />,
        code: "https://github.com/Mercad0/photomatic",
        live: "https://photomatic-three.vercel.app/",
      },
  ];

  return (
    <div className="h-fit w-fit m-8 pt-20 text-center flex" id="projects">
      <div className=" md:w-full justify-center w-fit min-h-80 bg-gray-300 duration-500 rounded-lg hover:rounded-3xl shadow-lg p-6 mx-auto">
        <h3 className="md:text-2xl text-xl font-medium">Projects</h3>
        <div className="flex flex-wrap mt-8">
          <Eachproject projects={projects} />
        </div>
      </div>
    </div>
  );
}

interface ProjectProps {
  projects: {
    photo: any;
    title: string;
    description: string;
    code: string;
    live: string;
  }[];
}

const Eachproject = ({ projects }: ProjectProps) => {
  return (
    <ul className="gap-8 flex flex-wrap">
      {projects.map((projects) => (
        <li key={projects.title} className="border border-black rounded-lg max-w-sm mx-auto bg-gray-200">
            <div className="w-full">
          {projects.photo}
          </div>
          <div className="p-2">
            <h3 className="mb-2 text-2xl font-bold">{projects.title}</h3>
            <h5 className="mb-2">{projects.description}</h5>
            <div className="flex space-x-4 justify-center text-xl">
              <Link
                href={projects.code}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-2xl duration-500 text-red-600"
              >
                <FaCode />
              </Link>
              <Link
                href={projects.live}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-2xl duration-500 text-lime-500"
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
