import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div>
        <h1 className='text-8xl mt-38 font-extrabold mb-4 text-center'>Welcome to <span className='text-blue-500'>LifeLink</span></h1>
        <h2 className='text-4xl font-bold mt-10  text-center text-gray-600 typing-text'>Save Life , Save Souls , Donate Blood</h2>
      </div>
      <div className = 'text-center mt-30'>
        <Link to = "/donorblood" className = " mx-10 bg-blue-500 text-white py-4 px-7 rounded-2xl hover:bg-white hover:text-blue-900 text-2xl transition-all duration-200 hover:border-1">Donate Blood</Link>
        <Link to = "/requestblood" className = "mx-10 bg-blue-500 text-white py-4 px-7 rounded-2xl hover:bg-white hover:text-blue-900 text-2xl transition-all duration-200 hover:border-1">Request  Blood</Link>
      </div>
      <div className='mt-30'>
        h
      </div>
    </>
  )
}

export default Home