import React from 'react';
import about_me from '../assets/About-me.JPG'

function AboutMe() {
  return (
    <div id='About-me' className='my-[100px] max-w-[1080px] mx-auto'>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-[14px] text-gray-400'>Who is Oteri Prince ?</div>
            <h2 className='text-[32px] font-bold text-[#7eadfc]'>A Bit About Me</h2>
            <div className='sm:flex sm:flex-col sm:mx-[16px] md:grid md:grid-cols-2 mt-[48px]'>
                <div className='sm:w-[100%] md:w-[300px] md:rotate-0 lg:rotate-[15deg] md:ml-[60px] hover:rotate-0 transition duration-1000 ease-in-out'>
                    <img className='sm:h-[200px] sm:mx-auto sm:mb-4 sm:block md:h-[300px] object-cover rounded-lg' src={about_me} alt="about-me-img" />
                </div>
                <div className='flex flex-col sm:items-center sm:text-[14px] md:items-start gap-[24px] text-gray-400 break-words'>
                    <p>As a goal-oriented front-end developer, I am committed to building strong, collaborative teams and providing the best solutions possible. My area of expertise is creating fantastic user interfaces and my work is excellent and provides consumers with a smooth experience across mobile and online platforms.</p>
                    <p>🚀 My journey in web development has been driven by a fascination for the dynamic nature of the web. I thrive on the challenge of translating creative concepts into responsive and engaging websites, all while staying at the forefront of modern web technologies.</p>
                    <a className='bg-[#7eadfc] text-[#07172a] text-center w-[300px] py-2 rounded hover:bg-[#b3cfff]' href="#Contacts">Let's Talk About Your Project</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe