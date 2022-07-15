import React from "react";
import { MdExpandMore } from "react-icons/md";
import webservice from "../public/assets/portfolio/webservice.png";
import game from "../public/assets/portfolio/game.png";
import weather from "../public/assets/portfolio/weather.png";
import spotify from "../public/assets/portfolio/spotify.png";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const portfolios=[
    {
      id:1,
      title:"adiTech",
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
  ]
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <p className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Portfolio
        </p>
        <h2 className="py-4 max-w-lg">Talented and experienced front-end developer with 06+ months of experience executing with a plethora of diverse skills. Experience has taught me to take accessibility and responsiveness seriously, and i am excited to continue my carrer at web devlopment with focus on making site developments easily accessible, completely responsive and intuitive for users.</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div
                key={id}
                className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md bg-blend-overlay"
              >
                <Image
                  src={imageSrc}
                  alt="random"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;