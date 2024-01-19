import React from 'react';
import { FaDownload } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import hero_img from '../assets/Hero.JPG';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import CV_frontend from '../assets/CV-Frontend Dev.pdf';

function Home() {
  return (
    <>
        <div className='my-[70px] max-w-[1080px] mx-auto'>
            <div className='flex flex-col justify-center items-center relative'>
                <div className='bg-white h-[120px] w-[120px] rounded-full border-4 border-gray-300  overflow-hidden'>
                    <img src={hero_img} alt="" />
                    <div className='lg:absolute lg:right-[488px] lg:bottom-[315px] text-[26px] z-10'>&#128075;</div>
                </div>
                <div className='mt-[24px]'>
                    <h1 className='sm:text-[24px] sm:mx-[16px] md:px-[24px] md:text-[32px] lg:text-[35px] md:leading-[35px] lg:leading-[50px] text-center text-gray-400 font-extralight break-words'>🚀 Hello World!<span className='font-extrabold text-white'> I'm Prince.</span> I am a  passionate  <span className='font-extrabold text-white'>front-end developer</span> on a mission to transform ideas into engaging, user-centric web experiences. I enjoy building websites and my focus is <span className='font-extrabold text-white underline'>React and Typescript</span>.</h1>
                </div>
                <div className='flex sm:flex-col md:flex-row items-center gap-[20px] mt-[40px]'>
                    <a className='bg-[#7eadfc] hover:bg-[#b3cfff] py-3 px-10 rounded-full text-[#0f172a]  md:text-md font-bold' href="#Contacts">Contact me here <IoIosArrowRoundForward className='inline sm:text-sm md:text-[16px] text-[#07172a]'/></a>
                    <a download={CV_frontend} className='bg-white hover:bg-[#d0d0d0] text-[#07172a] sm:text-sm md:text-md py-3 px-10 rounded-full font-bold' href={CV_frontend}>Download CV <FaDownload className='inline ml-2 sm:text-sm md:text-[16px]'/> </a>
                    <div className='flex gap-[16px] bg-white/10 py-3 px-6 rounded-full'>
                        <a href="https://www.linkedin.com/in/oteri-prince-3077542ab/" target='_blank'><FaLinkedin className='text-white text-[24px] hover:text-[#7eadfc]'/></a>
                        <a href="https://twitter.com/gold_ugly" target='_blank'><FaSquareXTwitter className='text-white text-[24px] hover:text-[#7eadfc]'/></a>
                        <a href="https://github.com/terri-miles" target='_blank'><FaGithub className='text-white text-[24px] hover:text-[#7eadfc]'/></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home