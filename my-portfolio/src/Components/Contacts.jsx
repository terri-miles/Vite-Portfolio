import React, { useState } from 'react';

function Contacts() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div id='Contacts' className='my-[140px] max-w-[1080px] mx-auto'>
        <div className='flex flex-col justify-center items-center sm:mx-[16px] md:mx-[24px]'>
            <div className='text-[14px] text-gray-400'>Lets Get in Touch</div>
            <h2 className='text-[32px] font-bold text-[#7eadfc] text-center'>I am constantly eager to hear about new projects and opportunities.</h2>
            <form className='mt-[48px] sm:w-[300px] md:w-[550px] space-y-[16px] text-[14px] sm:mx-auto' >
                <input onChange={(e) => setFullName(e.target.value)} type="text" placeholder='Enter Your Full Name' className='w-full py-4 px-4 rounded-md bg-transparent border-2 border-[#1c3662] outline-none' />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-full py-4 px-4 rounded-md bg-transparent border-2 border-[#1c3662] outline-none' />
                <textarea onChange={(e) => setMessage(e.target.value)} name='message' placeholder='Enter Your Message' rows='10' cols='30' className='w-full py-4 px-4 rounded-md bg-transparent border-2 border-[#1c3662] outline-none h-[150px]'></textarea>
                <div>
                    <button className='bg-[#7eadfc] w-[200px] h-[50px] rounded block mx-auto mt-[40px]' type='submit'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacts