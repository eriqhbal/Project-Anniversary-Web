import React from 'react'
import Typed from 'react-typed';
import logo from '../Assets/images/twice-photo.png';

const Hero = () => {
  return (
    <div className='mb-14'>
      <div className='text-center font-bold'>
        <div className='flex justify-center items-center'>
          <h2 className='text-2xl'>6th/</h2>
          <Typed className='text-2xl text-base_colors' strings={['六 年間']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <div className='w-100 self-end px-4'>
          <div className='relative mt-8 lg:mt-9 lg:right-0'>
            <img className=' w-50% mx-auto' src={logo} alt="/" />
            <span className='absolute top-10 -bottom-0 -z-10 left-1/2 -translate-x-1/2'>
              <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF0066" d="M31.8,-28.9C41.5,-22.1,49.8,-11.1,49,-0.8C48.2,9.5,38.4,19.1,28.7,26.9C19.1,34.7,9.5,40.8,-4,44.8C-17.5,48.8,-35.1,50.7,-42.4,42.9C-49.7,35.1,-46.9,17.5,-49.4,-2.5C-51.9,-22.6,-59.9,-45.2,-52.5,-51.9C-45.2,-58.7,-22.6,-49.6,-5.8,-43.8C11.1,-38.1,22.1,-35.6,31.8,-28.9Z" transform="translate(100 100) scale(1.8)" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero