import React, { useEffect, useState } from 'react';
import { Links } from './NavLinks';

function NavBar() {
    const [menu, setMenu] = useState('Home');
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
        <div id='Home' className='py-6 bg-[#07172a] max-w-[1080px] mx-auto sticky top-0 z-20'>
            <div className='flex justify-between items-center relative'>
                <div className='text-[20px] font-bold sm:mx-[16px] md:mx-[24px]'>Oteri.<span className='text-[#7eadfc]'>Dev</span></div>
                <div className='sm:hidden md:flex items-center gap-[40px] sm:mx-[16px] md:mx-[24px]'>{
                        Links.map((link) => {
                            return(
                                <a key={link.id} onClick={() => setMenu(`${link.name}`)} href={link.href} className={`text-[14px] ${menu == link.name ? 'text-[#7eadfc]' : ''}`}>{link.name}</a>
                            )
                        })
                    }
                </div>
                <div onClick={() => setOpenMenu(!openMenu)} className={`sm:block sm:mx-[16px] md:hidden cursor-pointer ${openMenu ? 'toggle' : ''}`}>
                    <div className='w-[2rem] h-[0.2rem] bg-gray-300 m-[0.4rem] rounded line1 transition duration-200 ease-in'></div>
                    <div className='w-[2rem] h-[0.2rem] bg-gray-300 m-[0.4rem] rounded line2 transition duration-200 ease-in'></div>
                    <div className='w-[2rem] h-[0.2rem] bg-gray-300 m-[0.4rem] rounded line3 transition duration-200 ease-in'></div>
                </div>
            </div>
            <div className={`md:hidden absolute right-0 top-[75px] bg-black/90 w-[100%] h-[500px] pt-[50px] transform duration-200 origin-top z-10 ${openMenu ? 'sm:scale-y-1' : 'sm:scale-y-0'}`}>
                <div className='sm:flex sm:flex-col sm:mt-[20px] md:hidden items-center gap-[40px] mx-[16px]'>{
                            Links.map((link) => {
                                return(
                                    <a key={link.id} onClick={() => setOpenMenu(!openMenu)} href={link.href} className='text-[16px]'>{link.name}</a>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar