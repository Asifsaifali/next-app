import React from 'react'
import { motion } from 'framer-motion'
const Page = () => {
  return (
    <>
        <nav className='bg-mybg text-black w-full h-screen flex flex-row space-around justify-center  border-2'>
            <h1 className='hover:scale-1 absolute sm:text-2xl lg:text-4xl font-cursive left-5 top-2 cursor-pointer'>LOGO</h1>
             <h2 className='lg:text-2xl sm:text-1.4xl md:text-1.4xl font-cursive cursor-pointer absolute top-2 '>Home</h2>
             <h2 className='sm:text-1.2xl lg:text-2xl font-cursive cursor-pointer absolute top-2 right-9 '>Resume</h2>
             <h2 className='text-2xl font-cursive cursor-pointer absolute align-middle right-2 rotate-90 top-80'>For Fun</h2>
             <h2 className='text-2xl font-cursive cursor-pointer absolute bottom-4 left-9'>Projects</h2>
             <h2 className='text-2xl font-cursive cursor-pointer absolute bottom-4 '>About Me</h2>
             <h2 className='text-2xl font-cursive cursor-pointer absolute bottom-4 right-9'>Contact</h2>
             <div>
               
             </div>
        </nav>
    </>
  )
}

export default Page
