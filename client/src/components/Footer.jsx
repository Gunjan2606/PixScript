import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src="/icon1.jpeg" alt="logo" className="w-10 sm:w-10 lg:w-10" />
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm
      text-gray-500 max-sm:hidden'>Copyright @Gunjan.dev| All rights reserved.</p>
      <div className='flex gap-2.5'>
      <img src={assets.facebook_icon} alt='' width={35}/>
      <img src={assets.twitter_icon} alt='' width={35}/>
      <img src={assets.instagram_icon} alt='' width={35}/>
      </div>
    </div>
  )
}

export default Footer
