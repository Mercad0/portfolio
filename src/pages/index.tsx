import About from "@/components/About";
import NavBar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-gray-100 to-gray-600 h-screen">
      <NavBar />
      <About />
      {/* 
    <Skills />
    <Projects />
    <Contact /> */}
    </div>
  );
}
