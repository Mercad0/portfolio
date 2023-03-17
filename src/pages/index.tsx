import About from "@/components/About";
import NavBar from "@/components/navbar/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-fit flex justify-center bg-gradient-to-br from-gray-100 to-gray-600 h-full">
      <NavBar />
      <div className="flex-grow">
        <About />
        <Skills />
        <Projects />
      </div>
      {/* 
    <Contact /> */}
    </div>
  );
}
