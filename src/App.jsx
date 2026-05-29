import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'
import Donateblood from './pages/donateblood.jsx'
import Requestblood from './pages/requestblood.jsx'
import Dashboard from './pages/dashboard.jsx'
import Emergency from './pages/emergency.jsx'

import { motion, useScroll, useSpring } from "framer-motion";

import Background3d from './pages/components/Background3d.jsx'

const App = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <BrowserRouter>

      <div className="scroll-smooth">

        <Background3d />

        <nav className="flex justify-between">

          <motion.div
            className='w-50'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <h2 className='text-2xl font-bold my-3 mx-5'>
              Life<span className='text-blue-700'>Link</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
          >

            <div className="flex gap-4 p-3">

              <HashLink
                smooth
                className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl"
                to="/#home"
              >
                Home
              </HashLink>

              <HashLink
                smooth
                className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl"
                to="/#donateblood"
              >
                Donate Blood
              </HashLink>

              <HashLink
                smooth
                className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl"
                to="/#requestblood"
              >
                Request Blood
              </HashLink>

              <HashLink
                smooth
                className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl"
                to="/#dashboard"
              >
                Dashboard
              </HashLink>

              <HashLink
                smooth
                className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl"
                to="/#emergency"
              >
                Emergency
              </HashLink>
              <HashLink
                smooth
                className="hover:bg-gray-200 transition-all duration-200 p-2 rounded-xl"
                to="/login"
              >
                Login
              </HashLink>

            </div>

          </motion.div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App