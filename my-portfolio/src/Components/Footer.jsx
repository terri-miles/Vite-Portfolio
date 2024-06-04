import React from 'react';
import { Links } from './NavLinks';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className='mt-[140px] bg-[#192e5d] w-full sm:px-[16px]'>
        <div className='flex flex-col justify-center items-center py-[50px]'>
            <div className='flex justify-between items-center text-white sm:gap-[16px] md:gap-[40px] font-semibold'>{
                        Links.map((link) => {
                            return(
                                <a key={link.id} href={link.href} className={`sm:text-[12px] md:text-[14px] hover:text-white/50`}>{link.name}</a>
                            )
                        })
                    }
             </div>
             <div className='flex items-center gap-[8px] mt-[56px] text-white'>
                <a className='text-white text-[22px] lg:hover:bg-transparent transition duration-200 ease-in-out lg:hover:text-[#e097ff] py-3 px-3 rounded-lg' href="https://twitter.com/gold_ugly" target='_blank'><FaXTwitter /></a>
                <a className='text-white text-[22px] lg:hover:bg-transparent transition duration-200 ease-in-out lg:hover:text-[#e097ff] py-3 px-3 rounded-lg' href="https://www.linkedin.com/in/oteri-prince-3077542ab/" target='_blank'><FaLinkedin /></a>
                <a className='text-white text-[22px] lg:hover:bg-transparent transition duration-200 ease-in-out lg:hover:text-[#e097ff] py-3 px-3 rounded-lg' href="https://github.com/terri-miles" target='_blank'><FaGithub /></a>
                <a className='text-white text-[22px] lg:hover:bg-transparent transition duration-200 ease-in-out lg:hover:text-[#e097ff] py-3 px-3 rounded-lg' href="https://wa.me/07059604765" target='_blank'><FaWhatsappSquare /></a>
                <a className='text-white text-[22px] lg:hover:bg-transparent transition duration-200 ease-in-out lg:hover:text-[#e097ff] py-3 px-3 rounded-lg' href="mailto:oteriprince01@gmail.com" target='_blank'><MdEmail /></a>
             </div>
             <p className='mt-[56px] text-[14px] text-white/50'>© Oteri Prince.</p>
        </div>
    </div>
  )
}

export default Footer