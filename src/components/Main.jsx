import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://i.pinimg.com/originals/57/71/04/577104df5dcb172baba3642255bc33dc.jpg' alt='background-pic' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Terrance Henson</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                I'm a
                <TypeAnimation
                    sequence={[
                        'Developer', // Types 'One'
                        2000, // Waits 1s
                        'Coder', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Tech Enthusiast',
                        2000, 
                        
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                /> 
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='cursor-pointer' size={20} />
                <FaFacebookF className='cursor-pointer' size={20} />
                <FaInstagram className='cursor-pointer' size={20} />
                <FaLinkedinIn className='cursor-pointer' size={20} />
            </div>
        </div>

        </div>
    </div>
  )
}

export default main