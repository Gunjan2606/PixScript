import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext1';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {user, setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()

  const onClickHandler=()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Prompt Tag */}
      <motion.div
        className='flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 text-stone-500'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Your prompt to generate image</p>
        <img src={assets.star_icon} alt='star icon' />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className='text-4xl sm:text-7xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'
      >
        Turn words to{' '}
        <motion.span
          className='text-blue-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          image
        </motion.span>
        , in seconds!
      </motion.h1>

      {/* Subtext */}
      <p className='text-center max-w-xl mx-auto mt-5 text-neutral-600'>
        Say it, and poof—your ideas become pictures! It's like magic, but with pixels.
      </p>

      {/* Generate Button */}
      <motion.button onClick={onClickHandler}
        className='sm:text-lg text-white bg-black mt-8 px-12 py-2.5 rounded-full flex items-center gap-2'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img className='h-6' src={assets.star_group} alt='star group' />
      </motion.button>

      {/* Sample Images */}
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6)
          .fill('')
          .map((_, index) => (
            <motion.img
            whileHover={{scale:1.05,duration:0.1}}
              key={index}
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt='sample'
              className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
              width={70}
            />
          ))}
      </motion.div>

      {/* Footer Text */}
      <p className='mt-2 text-neutral-600'>Generated from PIXSCRIPT</p>
    </motion.div>
  );
};

export default Header;
