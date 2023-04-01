import About from "@/components/About";
import NavBar from "@/components/navbar/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-gray-800 to-gray-400 h-full pb-20">
       <Head>
        <title>Abimael M / Software Developer</title>
        <meta name="description" content="Abimael M Portfolio - front-end Software Developer, Explore recent projects, and contact information." />
        <link rel="icon" href="/images/tabIcon.png" />
      </Head>
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
