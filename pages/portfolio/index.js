import React from 'react'
import webservice from '../../public/assets/portfolio/webservice.png';
import game from '../../public/assets/portfolio/game.png';
import weather from '../../public/assets/portfolio/weather.png';
import spotify from '../../public/assets/portfolio/spotify.png';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
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
  return {
    props: { portfolios },
  };
}

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute