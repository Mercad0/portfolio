import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="pt-8 container mx-auto">
      <NavBar />
      <main className="flex justify-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
