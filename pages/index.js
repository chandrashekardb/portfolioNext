import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import Head from "next/head"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Chandrashekar</title>
      </Head>  
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </div>
  )
}
