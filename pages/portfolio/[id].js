import React from "react";
import webservice from '../../public/assets/portfolio/webservice.png';
import game from '../../public/assets/portfolio/game.png';
import weather from '../../public/assets/portfolio/weather.png';
import spotify from '../../public/assets/portfolio/spotify.png';

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios=[
    {
      id:1,
      title:"web services",
      imageSrc: webservice,
      url:"web-services",
    },
    {
      id:2,
      title:"game using js",
      imageSrc: game,
      url:"game",
    },
    {
      id:3,
      title:"react weather app",
      imageSrc: weather,
      url:"react-weather",
    },
    {
      id:4,
      title:"spotify clone using js",
      imageSrc: spotify,
      url:"spotify-clone",
    }
  ];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <div className="flex items-left justify-center text-left gap-10">
        <p>
        ▣ Translate static designs into interactive elements of web products and computer applications using programming languages such as HTML, CSS, JavaScript, React JS, Node JS and Tailwind.        
        </p>
        <p>
        ▣ Check design and development against client requirements and make sure the output addressed the requiremets.
        </p>
        <p>
        ▣ Handle last-minute changes to project requirements professionally and edit designs and code as needed.
        </p>
        <p>
        ▣ Present work to clients, build products that align with client requirements and imporve client loyalty.
        </p>
        <p>
        ▣ Work on debugging code to solve functionality issues in the front end of websites.
        </p>
        <p>
        ▣ work with back end.
        </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/chandrashekardb">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;