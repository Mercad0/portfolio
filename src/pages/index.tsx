import About from "@/components/About";
import NavBar from "@/components/navbar/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-gray-800 to-gray-400 h-full pb-20">
      <NavBar />
      <div className="flex-grow mx-6">
        <div className="flex">
          <About />
        </div>
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
