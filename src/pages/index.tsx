import About from "@/components/About";
import NavBar from "@/components/navbar/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-gray-100 to-gray-600 h-[150vh]">
      <NavBar />
      <div className="flex-grow">
      <About />
      <Skills />

      </div>
      {/* 
    <Projects />
    <Contact /> */}
    </div>
  );
}
