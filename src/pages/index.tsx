import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full flex px-6 flex-col pb-16">
      <Head>
      <title>Abimael M / Software Developer</title>
        <meta
          name="description"
          content="Abimael M Portfolio - front-end Software Developer, Explore recent projects, and contact information."
        />
        <link rel="icon" href="/images/tabIcon.png" />
      </Head>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
