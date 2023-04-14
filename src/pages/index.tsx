import About from "@/components/About";
import NavBar from "@/components/navbar/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full flex px-6 flex-col pb-16">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
