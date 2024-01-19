import React from 'react'
import ProjectGrid from './ProjectGrid'

function Projects() {
  return (
    <>
        <div id='My-Projects' className='my-[100px] max-w-[1080px] mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='text-[14px] text-gray-400'>My Recent Work</h4>
                <h2 className='text-[32px] font-bold text-[#7eadfc]'>Projects</h2>
                <ProjectGrid />
            </div>
        </div>
    </>
  )
}

export default Projects