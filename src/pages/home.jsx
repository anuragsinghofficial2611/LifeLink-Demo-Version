import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <div className = "h-screen">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-8xl mt-38 font-extrabold mb-4 text-center'>Welcome to <span className='text-blue-500'>LifeLink</span></h1>
          <h2 className='text-4xl font-bold mt-10  text-center text-gray-600 typing-text'>Save Life , Save Souls , Donate Blood</h2>
        </motion.div>
        <motion.div className='text-center mt-30'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/donorblood" className=" mx-10 bg-blue-500 text-white py-4 px-7 rounded-2xl hover:bg-white hover:text-blue-900 text-2xl transition-all duration-200 hover:border-1">Donate Blood</Link>
          <Link to="/requestblood" className="mx-10 bg-blue-500 text-white py-4 px-7 rounded-2xl hover:bg-white hover:text-blue-900 text-2xl transition-all duration-200 hover:border-1">Request  Blood</Link>
        </motion.div>
      </div>
    </>
  )
}

export default Home