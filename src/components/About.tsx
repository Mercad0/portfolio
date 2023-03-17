import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="h-fit w-full pt-40 text-center" id="about">
      <div className=" md:w-[540px] w-[340px] min-h-40 bg-gray-200 hover:bg-gray-100 duration-500 rounded-lg hover:rounded-3xl shadow-lg p-6 md:ml-20 mx-auto">
        <h3 className="md:text-3xl text-xl leading-relaxed">
          Hello there, I&rsquo;m Abimael Mercado. I&rsquo;m a
          <span className="md:text-5xl text-3xl font-extralight">
            {" "}
            software developer
          </span>{" "}
          with a hospitality, and operations background. Passionate about
          continuous learning and always strive to improve my skills.
        </h3>
        <div className="flex justify-center text-4xl mt-2 space-x-6">
          <Link
            href="https://www.github.com/mercad0"
            target="_blank"
            rel="noopener noreferrer"
            className="rotateIcon text-gray-700 hover:text-black"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abimr"
            target="_blank"
            rel="noopener noreferrer"
            className="rotateIcon text-blue-800 hover:text-blue-500"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
