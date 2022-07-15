import React from 'react'
import Link from 'next/link'
import {MdExpandMore} from "react-icons/md";

const Me = () => {
  return (
    <div id='me' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>
                me
            </h2>
            <div className='shadow-xl shadow-pink-300 my-8 px-8'>
                <p className='py4 max-w-2xl mx-auto'>
                Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team memebers to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when neccessary. with a passion for both personal growth and for sofware development, I attended a 10+ hour coding bootcamp to learn new languages while sharpening existing skills. Ready to applly my passion for coding to a talented engineering team to develop quallity solutions.
                </p>
                
            </div>
            
            <div className="flex items-center justify-center gap-10">
                <Link href='/Resume.pdf' download={true}>
                    <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                    Resume
                    <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
                        <MdExpandMore size={25} />
                    </span>
                    </div>
                </Link>

                <Link href='/#portfolio' >
                    <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                    my portfolio
                    <span className='-rotate-90 duration-100 ease-in group-hover:rotate-180'>
                        <MdExpandMore size={25} />
                    </span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Me