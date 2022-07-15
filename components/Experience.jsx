import React from 'react';
import html from '../public/assets/experience/html.png';
import css from '../public/assets/experience/css.png';
import javascript from '../public/assets/experience/js.png';
import reactImage from '../public/assets/experience/react.png';
import nextjs from '../public/assets/experience/next.png';
import tailwind from '../public/assets/experience/tailwind.png';
import graphql from '../public/assets/experience/graphql.png';
import node from '../public/assets/experience/node.png';
import Image from 'next/image';


const Experience = () => {
    const experiences=[
        {
            id:1,
            title:'HTML',
            src:html
        },
        {
            id:2,
            title:'CSS',
            src:css
        },
        {
            id:3,
            title:'JavaScript',
            src:javascript
        },
        {
            id:4,
            title:'React',
            src:reactImage
        },
        {
            id:5,
            title:'Next JS',
            src:nextjs
        },
        {
            id:6,
            title:'TailWind',
            src:tailwind
        },
        {
            id:7,
            title:'Graph QL',
            src:graphql
        },
        {
            id:8,
            title:'Node JS',
            src:node
        },

    ]
  return (
    <div id='experience' className='w-full'>
       <div className="max-w-screen-xl mx-auto px-8 py-6 text-center md:text-left">
        <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>Experience</h2>
        <p className='py-4 max-w-lg'> ◐ Implemented front-end technical solutions to meet project requirements for creation of 5 new web pages.
        ◐ Ensured 6 projects complied with correct technology processess, industry best practiecs, and company standards.
        ◐ Built 05 interactive, single-page apps.
        ◐ Buitl 05 modern JavaScript-based products.
        ◐ Created Landing pages using HTML & CSS</p>

        <div className='grid lg:grid-cols-4 gap-8'>
            {
                experiences.map(({id, title, src})=>(
                    <div key={id} className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-110 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400">

                        <Image src={src} width='204px' height='64px' alt={title} />
                        <h3 className='font-light'>{title}</h3>

                    </div>
                )) }
        </div>
      </div>
    </div>
  )
}

export default Experience