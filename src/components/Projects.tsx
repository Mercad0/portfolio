import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      title: "Fotomatic",
      description: "Photography site about lenses and photographs",
      photo: (
        <Image
          src="/./images/photomatic.png"
          alt="Logo"
          width={400}
          height={100}
          priority={true}
          style={{ width: "400px", height: "250px" }}
        />
      ),
      code: "https://github.com/Mercad0/photomatic",
      live: "https://photomatic-three.vercel.app/",
    },
    {
      title: "Tea Cozy",
      description: "Virtual tea site, come check it out!",
      photo:  <Image
      src="/./images/cozy.png"
      alt="Logo"
      width={400}
      height={100}
      priority={true}
      style={{ width: "400px", height: "250px" }}
    />,
      code: "https://github.com/Mercad0/teacozy",
      live: "https://teacozy-beige.vercel.app/",
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
        style={{ width: "400px", height: "250px" }}
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
        style={{ width: "400px", height: "250px", objectFit: "cover" }}
      />,
        code: "https://github.com/Mercad0/photomatic",
        live: "https://photomatic-three.vercel.app/",
      },
  ];

  return (
    <div className="h-fit w-fit md:m-16 m-4 pt-20 text-center flex" id="projects">
      <div className=" md:w-full justify-center w-fit min-h-80 bg-gray-300 hover:bg-gray-100 duration-500 rounded-lg hover:rounded-3xl shadow-lg p-6 mx-auto">
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
        <li key={projects.title} className="border border-black rounded-lg max-w-sm mx-auto bg-gray-200 overflow-hidden">
            <div className="w-full border border-b-black">
          {projects.photo}
          </div>
          <div className="p-2">
            <h3 className="text-2xl font-bold">{projects.title}</h3>
            <h5 className="mb-2">{projects.description}</h5>
            <div className="flex space-x-4 justify-center text-2xl">
              <Link
                href={projects.code}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-3xl duration-500 text-red-600"
              >
                <FaCode />
              </Link>
              <Link
                href={projects.live}
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
