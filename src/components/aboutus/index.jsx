import React from 'react'
import {ArrowRightIcon} from '@heroicons/react/20/solid'
import aboutUsImage from '../../assets/aboutus.jpg'

const AboutUs = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col lg:flex-row mt-12 items-center py-12'>
      <div className='lg:w-1/2'><img className='w-3/4 shadow-2xl block mx-auto' src={aboutUsImage} alt="" /></div>
      <div className=' lg:w-1/2 font-semibold tracking-wide text-xl mx-8 px-8
      '>
        <h2 className='text-5xl text-textColor font-bold my-8'>Who are we?</h2>
        <ul className='text-secondaryTextColor'>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
        </ul>
      </div>
    </div>
    <div className=' flex flex-col-reverse lg:flex-row mt:2 lg:mt-12 items-center py-12'>
      <div className=' lg:w-1/2 font-semibold tracking-wide text-xl mx-8 px-8
      '>
        <h2 className='text-5xl text-textColor font-bold my-8'>Why to choose us?</h2>
        <ul className='text-secondaryTextColor'>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
          <li className='py-2 flex items-start'><span className='max-w-8'><ArrowRightIcon width={20} className='inline mr-2'/></span>
            <div clas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci ipsam. </div>
          </li>
        </ul>
      </div>
      <div className='lg:w-1/2 '><img className='w-3/4 block shadow-2xl mx-auto' src={aboutUsImage} alt="" /></div>
    </div>
    </div>
    
  )
}

export default AboutUs