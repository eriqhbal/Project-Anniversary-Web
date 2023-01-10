import React from 'react'

// import photo
import photoSchool from '../Assets/images/photo_schools.jpg'

const About = () => {
  return (
    <div className='w-30 mt-48 h-30 bg-base_colors flex text-white rounded-b-lg'>
      <div className='w-full mt-6 p-4'>
         <img className='w-32 mx-auto rounded-2xl border-neutral-600 drop-shadow-xl' src={photoSchool} alt="old_school"/>
         <div className='text-center'>
              <h3 className='text-gray-800 font-bold text-xl'>About us</h3>
              <p className='w-1/2 mx-auto'>We are have similar characteristic, but sometimes we have different character, we are personally really lucky to have each other.</p>
         </div>  
      </div>
    </div>
  )
}

export default About