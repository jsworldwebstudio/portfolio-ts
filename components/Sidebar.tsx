import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {

  const { theme, setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Image
        src="/James_photo.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
        width="128"
        height="128"
        layout="intrinsic"
        quality="100"
      />
      {/* <img
        src="/James_photo.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      /> */}
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">James </span>
        Slaughter
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Resume of James Slaughter.pdf"
        download="Resume of James Slaughter.pdf">
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* //social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        {/*<a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" aria-label="YouTube" />
        </a>*/}
        <a href="https://github.com/jsworldwebstudio">
          <AiFillGithub className="w-8 h-8 cursor-pointer" aria-label="Github" />
        </a>
        <a href="http://www.linkedin.com/in/jsworldwebstudio">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" aria-label="LinkedIn" />
        </a>
      </div>


      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 style={{ marginLeft:'-1rem',marginRight:'-1rem' }}">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bolingbrook, IL USA</span>
        </div>
        <p className="my-2">james.slaughter08@gmail.com</p>
        <p className="my-2">630-803-6356</p>
      </div>
      {/* Email Button */}
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      onClick={()=>window.open('mailto:james.slaughter08@gmail.com')}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar