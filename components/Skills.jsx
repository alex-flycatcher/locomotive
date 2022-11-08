import React from 'react'
import Php from '../public/assets/skills/php.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Magento from '../public/assets/skills/magento.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import Image from 'next/image';

function Skills() {
  return (
    <div id='skills' className='w-screen h-screen flex justify-center items-center' >
      <div className='max-w-[1240px] mx-auto p-2 py-20 flex flex-col '>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Php} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PHP</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Magento} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Magento</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-2 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  backdrop-blur drop-shadow shadow-gray-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills 