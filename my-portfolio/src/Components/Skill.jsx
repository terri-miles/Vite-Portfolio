import React from 'react';
import { BiSolidBadgeCheck } from "react-icons/bi";

function Skill({ item }) {
  return (
    <div className='border border-[#7eadfc] flex flex-col justify-center items-center rounded-lg py-6 px-4'>
        <div className='text-[40px] mb-[16px] text-[#7eadfc]'>{item.icon}</div>
        <h4 className='text-[14px]'><BiSolidBadgeCheck className='inline' /> {item.name}</h4>
        <p className='text-[10px] text-gray-500'>Experienced</p>
    </div>
  )
}

export default Skill