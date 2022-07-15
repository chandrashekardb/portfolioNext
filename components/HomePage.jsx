import React from 'react';
import heroImage from '../public/assets/heropic.png';
import {MdExpandMore} from 'react-icons/md'
import Image from 'next/image';
import Link from 'next/link'

const HomePage = () => {
  return (
    <div id='home' className='h-screen w-full text-center bg-slate-100'>
        <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'>
            <div className='w-64 h-64 mx-auto overflow-hidden rounded-xl'>
                <Image src={heroImage} alt="me" />
            </div>
            <h1 className='uppercase font-bold text-gray-700 text-7xl'>full stack developer</h1>

            <p className='text-xl text-gray-600 max-w-xl mx-auto'> I have a 6 monts of experience building and desgining software. Currently, I love to work on web application using techonologies like React, Tailwind, Next Js and Node JS</p>

            <Link href='/#me'>
              <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                know more
                <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
                  <MdExpandMore size={25} />
                </span>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default HomePage