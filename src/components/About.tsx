import { FaGithub, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";

function About() {
  return (
    <div className="h-fit w-full text-center py-20 mt-16" id="about">
      <div className=" md:w-5/6 w-fit min-h-40 bg-gradient-to-br from-gray-600 to-gray-300 shadow-xl duration-500 rounded-lg hover:rounded-3xl text-gray-200 p-6 py-8 mx-auto">
        <h1 className="md:text-2xl text-xl font-medium mb-2">About Me</h1>
        <h2 className="md:text-2xl text-xl leading-relaxed">
          Hello there, I&rsquo;m Abimael Mercado. A
          <span className=" font-extralight"> software developer</span> with a
          hospitality, and operations background. Passionate about continuous
          learning and always strive to improve my skills.
        </h2>
        <div className="flex justify-center text-4xl mt-4 space-x-6">
          <a
            href="https://www.github.com/mercad0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github profile"
            className="rotateIcon text-gray-700 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abimr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rotateIcon text-blue-800 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex justify-center text-4xl mt-2 space-x-6">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
